package com.backend.server.service;

import java.util.ArrayList;
import java.util.Base64;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.stereotype.Service;

import com.backend.server.model.Category;
import com.backend.server.model.Product;
import com.backend.server.model.Shop;
import com.backend.server.repository.CategoryRepository;
import com.backend.server.repository.ProductRepository;
import com.backend.server.repository.ShopRepository;
import com.backend.server.requests.CreateProductRequest;
import com.backend.server.requests.CreateProductsRequest;
import com.backend.server.requests.DeleteProductRequest;
import com.backend.server.requests.GetRequest;
import com.backend.server.requests.ProductResponse;
import com.backend.server.requests.UpdateProductRequest;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductService {
    
    private final ShopRepository shopRepository;
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    public ProductResponse createProducts(CreateProductsRequest request) {
        List<Product> createdProducts = new ArrayList<>();
        for (CreateProductRequest productRequest : request.getProducts()) {
            createdProducts.add(createProduct(productRequest));
        }
        return new ProductResponse(createdProducts);
    }

    public Product createProduct(CreateProductRequest request) {
        Optional<Shop> optionalShop = shopRepository.findByShopName(request.getShopName());
        if (!optionalShop.isPresent()) {
            throw new IllegalArgumentException();
        }
        Shop shop = optionalShop.get();
        Set<Category> categories = new HashSet<>();
        categories.addAll(categoryRepository.findAllByShop_ShopIdAndCategoryNameIn(shop.getShopId(), request.getCategories()));
        byte[] logoBytes = Base64.getDecoder().decode(request.getLogo());
        var product = Product.builder()
        .productName(request.getName())
        .productDescription(request.getDescription())
        .productImage(logoBytes)
        .price(request.getPrice())
        .quantity(request.getQuantity())
        .shop(shop)
        .categories(categories)
        .build();

        productRepository.save(product);
        return product;
        
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

    public ProductResponse updateProduct(UpdateProductRequest request) {
        Optional<Shop> optionalShop = shopRepository.findByShopName(request.getShopName());
        if (!optionalShop.isPresent()) {
            throw new IllegalArgumentException();
        }
        Shop shop = optionalShop.get();
        Set<Category> categories = new HashSet<>();
        categories.addAll(categoryRepository.findAllByShop_ShopIdAndCategoryNameIn(shop.getShopId(), request.getCategories()));
        
        Optional<Product> optionalProduct = productRepository.findByProductNameAndShop_ShopId(request.getName(), shop.getShopId());
        if (!optionalProduct.isPresent()) {
            throw new IllegalArgumentException();
        }
        Product product = optionalProduct.get();
        product.setProductName(request.getNewName());
        product.setProductDescription(request.getDescription());
        if (request.getLogo()!= null) {
            byte[] logoBytes = Base64.getDecoder().decode(request.getLogo());
            product.setProductImage(logoBytes);
        }
        product.setPrice(request.getPrice());
        product.setQuantity(request.getQuantity());
        product.setCategories(categories);
        productRepository.save(product);
        return new ProductResponse(List.of(product));
        
    }

    public String deleteProduct(DeleteProductRequest request) {
        Optional<Shop> optionalShop = shopRepository.findByShopName(request.getShopName());
        if (!optionalShop.isPresent()) {
            throw new IllegalArgumentException();
        }
        else
        {
            Shop shop = optionalShop.get();
            productRepository.deleteByShop_ShopIdAndProductName(shop.getShopId(), request.getProductName());
            return request.getProductName();
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
            return new ProductResponse(products);
        }
    }
}
