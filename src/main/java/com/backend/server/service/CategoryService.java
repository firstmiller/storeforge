package com.backend.server.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.backend.server.model.Category;
import com.backend.server.model.Shop;
import com.backend.server.repository.CategoryRepository;
import com.backend.server.repository.ShopRepository;
import com.backend.server.requests.CategoryResponse;
import com.backend.server.requests.CreateCategoryRequest;
import com.backend.server.requests.DeleteCategoryRequest;
import com.backend.server.requests.GetRequest;
import com.backend.server.requests.UpdateCategoryRequest;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CategoryService {
    
    private final CategoryRepository categoryRepository;
    private final ShopRepository shopRepository;

    public CategoryResponse createCategory(CreateCategoryRequest request) {
        Optional<Shop> optionalShop = shopRepository.findByShopName(request.getShopName());
        if (!optionalShop.isPresent()) {
            throw new IllegalArgumentException();
        }
        else
        {
            Shop shop = optionalShop.get();
            var category = Category.builder()
            .categoryName(request.getCategoryName())
            .shop(shop)
            .build();
            categoryRepository.save(category);
            return new CategoryResponse(category.getCategoryName());
        }
    }

    public List<CategoryResponse> getCategory(GetRequest request) {
        Optional<Shop> optionalShop = shopRepository.findByShopName(request.getShopName());
        if (!optionalShop.isPresent()) {
            throw new IllegalArgumentException();
        }
        Shop shop = optionalShop.get();
        List<Category> optionalCategory = categoryRepository.findAllByShop_ShopId(shop.getShopId());
        if (optionalCategory.isEmpty()) {
            throw new IllegalArgumentException();
        }
        List<CategoryResponse> categoryResponse = optionalCategory.stream().map(category -> new CategoryResponse(category.getCategoryName())).toList();
        return categoryResponse;    
    }
    

    public CategoryResponse deleteCategory(DeleteCategoryRequest request) {
        Optional<Shop> optionalShop = shopRepository.findByShopName(request.getShopName());
        if (!optionalShop.isPresent())
        {
            throw new IllegalArgumentException();
        }
        Shop shop = optionalShop.get();
        categoryRepository.findByCategoryNameAndShop_ShopId(request.getCategoryName(), shop.getShopId()).ifPresent(category -> {
            categoryRepository.delete(category);
        });
        return new CategoryResponse(request.getCategoryName());
    }

    public CategoryResponse updateCategory(UpdateCategoryRequest request) {
        categoryRepository.findByCategoryName(request.getCategoryName()).ifPresent(category -> {
            category.setCategoryName(request.getNewCategoryName());
            categoryRepository.save(category);
        });
        return new CategoryResponse(request.getNewCategoryName());
    }
}
