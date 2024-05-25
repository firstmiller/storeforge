package com.backend.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.server.model.Shop;

public interface ShopRepository extends JpaRepository<Shop, Long> {

    Object findByShopName(String shopName);
    
}
