package com.backend.server.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.server.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

    List<Product> findAllByShop_ShopId(Long shopId);

    void deleteByShop_ShopIdAndProductName(Long shopId, String request);

    Optional<Product> findByProductNameAndShop_ShopId(String name, Long shopId);
    
}
