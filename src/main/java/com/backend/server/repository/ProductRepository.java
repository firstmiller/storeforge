package com.backend.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.server.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{
    
}
