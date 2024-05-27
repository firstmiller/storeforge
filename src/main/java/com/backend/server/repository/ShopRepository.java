package com.backend.server.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.server.model.Shop;

public interface ShopRepository extends JpaRepository<Shop, Long> {

    Optional<Shop> findByShopName(String shopName);
    
}
