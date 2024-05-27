package com.backend.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.server.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    List<Category> findAllByShopId(Long shopId);

    List<Category> findAllByShopIdAndCategoryName(Long shopId, List<String> categories);
    
}
