package com.backend.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.server.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

    List<Product> findAllByShopId(Long shopId);

    void deleteByShopIdAndProductName(Long shopId, String request);
    
}
