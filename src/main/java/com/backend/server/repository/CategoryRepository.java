package com.backend.server.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.server.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    List<Category> findAllByShop_ShopId(Long shopId);

    List<Category> findAllByShop_ShopIdAndCategoryNameIn(Long shopId, List<String> categories);

    Optional<Category> findByCategoryName(String request);

    Optional<Category> findByCategoryNameAndShop_ShopId(String categoryName, Long shop_id);

    
}
