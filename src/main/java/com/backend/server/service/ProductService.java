package com.backend.server.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.backend.server.model.Category;
import com.backend.server.model.Product;
import com.backend.server.model.Shop;
import com.backend.server.repository.CategoryRepository;
import com.backend.server.repository.ProductRepository;
import com.backend.server.repository.ShopRepository;
import com.backend.server.requests.CreateProductRequest;
import com.backend.server.requests.CreateProductsRequest;
import com.backend.server.requests.GetRequest;
import com.backend.server.requests.ProductResponse;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductService {
    
    private final ShopRepository shopRepository;
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    public ProductResponse createProducts(CreateProductsRequest request) {
        List<String> createdProducts = new ArrayList<>();
        for (CreateProductRequest productRequest : request.getProducts()) {
            createdProducts.add(createProduct(productRequest));
        }
        return new ProductResponse(createdProducts);
    }

    public String createProduct(CreateProductRequest request) {
        Optional<Shop> optionalShop = shopRepository.findByShopName(request.getShopName());
        if (!optionalShop.isPresent()) {
            throw new IllegalArgumentException();
        }
        else
        {
            Shop shop = optionalShop.get();
            Set<Category> categories = new HashSet<>();
            categories.addAll(categoryRepository.findAllByShop_ShopIdAndCategoryNameIn(shop.getShopId(), request.getCategories()));
            var product = Product.builder()
            .productName(request.getName())
            .productDescription(request.getDescription())
            .price(request.getPrice())
            .quantity(request.getQuantity())
            .shop(shop)
            .categories(categories)
            .build();

            productRepository.save(product);
            return request.getName();
        }
    }

    public List<Product> getProducts(String shopName) {
        Optional<Shop> optionalShop = shopRepository.findByShopName(shopName);
        if (!optionalShop.isPresent()) {
            throw new IllegalArgumentException();
        }
        else
        {
            Shop shop = optionalShop.get();
            return productRepository.findAllByShop_ShopId(shop.getShopId());
        }
    }

    public ProductResponse updateProduct(CreateProductRequest request) {
        Optional<Shop> optionalShop = shopRepository.findByShopName(request.getShopName());
        if (!optionalShop.isPresent()) {
            throw new IllegalArgumentException();
        }
        else
        {
            Shop shop = optionalShop.get();
            Set<Category> categories = new HashSet<>();
            categories.addAll(categoryRepository.findAllByShop_ShopIdAndCategoryNameIn(shop.getShopId(), request.getCategories()));
            var product = Product.builder()
            .productName(request.getName())
            .productDescription(request.getDescription())
            .price(request.getPrice())
            .quantity(request.getQuantity())
            .shop(shop)
            .categories(categories)
            .build();
            productRepository.save(product);
            return new ProductResponse(List.of(request.getName()));
        }
    }

    public ProductResponse deleteProduct(List<String> request) {
        Optional<Shop> optionalShop = shopRepository.findByShopName(request.get(0));
        if (!optionalShop.isPresent()) {
            throw new IllegalArgumentException();
        }
        else
        {
            Shop shop = optionalShop.get();
            productRepository.deleteByShop_ShopIdAndProductName(shop.getShopId(), request.get(1));
            return new ProductResponse(List.of(request.get(1)));
        }
    }

    public ProductResponse getProducts(GetRequest request) {
        Optional<Shop> optionalShop = shopRepository.findByShopName(request.getShopName());
        if (!optionalShop.isPresent()) {
            throw new IllegalArgumentException();
        }
        else
        {
            Shop shop = optionalShop.get();
            List<Product> products = productRepository.findAllByShop_ShopId(shop.getShopId());
            return new ProductResponse(products.stream().map(Product::getProductName).collect(Collectors.toList()));
        }
    }
}
