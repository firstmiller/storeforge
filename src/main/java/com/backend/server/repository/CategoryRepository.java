package com.backend.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.server.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    
}
