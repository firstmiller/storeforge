package com.backend.server.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.server.model.Shop;
import com.backend.server.requests.CreateShopRequest;
import com.backend.server.requests.GetRequest;
import com.backend.server.requests.ShopResponse;
import com.backend.server.service.ShopService;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin("http://localhost:3000")
@RequiredArgsConstructor
@RequestMapping("/api/shop/")
public class ShopController {

    private final ShopService shopService;
    
    @PostMapping("/create")
    public ResponseEntity<ShopResponse> createShop(CreateShopRequest request) {
        return ResponseEntity.ok(shopService.createShop(request));
    }

    @PostMapping("/update")
    public ResponseEntity<ShopResponse> updateShop(CreateShopRequest request) {
        return ResponseEntity.ok(shopService.updateShop(request));
    }

    @PostMapping("/delete")
    public ResponseEntity<ShopResponse> deleteShop(CreateShopRequest request) {
        return ResponseEntity.ok(shopService.deleteShop(request));
    }

    @GetMapping("/get")
    public ResponseEntity<List<Shop>> getShop(GetRequest request) {
        return ResponseEntity.ok(shopService.getShop(request));
    }

}
