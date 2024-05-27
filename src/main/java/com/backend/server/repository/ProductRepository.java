package com.backend.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.server.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

    List<Product> findAllByShop_ShopId(Long shopId);

    void deleteByShop_ShopIdAndProductName(Long shopId, String request);
    
}
