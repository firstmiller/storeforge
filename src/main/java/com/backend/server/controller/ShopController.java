package com.backend.server.controller;

import java.util.List;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
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
    public ResponseEntity<ShopResponse> createShop(@RequestHeader(HttpHeaders.AUTHORIZATION) String authorizationHeader, @RequestBody CreateShopRequest request) {
        String token = null;
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            token = authorizationHeader.substring(7);
        }
        return ResponseEntity.ok(shopService.createShop(token, request));
    }

    @PostMapping("/update")
    public ResponseEntity<ShopResponse> updateShop(@RequestHeader(HttpHeaders.AUTHORIZATION) String authorizationHeader,@RequestBody CreateShopRequest request) {
        return ResponseEntity.ok(shopService.updateShop(authorizationHeader,request));
    }

    @PostMapping("/delete")
    public ResponseEntity<ShopResponse> deleteShop(@RequestHeader(HttpHeaders.AUTHORIZATION) String authorizationHeader, @RequestBody CreateShopRequest request) {
        return ResponseEntity.ok(shopService.deleteShop(authorizationHeader, request));
    }

    @GetMapping("/get")
    public ResponseEntity<List<Shop>> getShop(@RequestHeader(HttpHeaders.AUTHORIZATION) String authorizationHeader) {
        return ResponseEntity.ok(shopService.getShop(authorizationHeader));
    }

}