package com.backend.server.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.server.requests.CreateProductsRequest;
import com.backend.server.requests.DeleteProductRequest;
import com.backend.server.requests.GetRequest;
import com.backend.server.requests.ProductResponse;
import com.backend.server.requests.UpdateProductRequest;
import com.backend.server.service.ProductService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin("http://localhost:3000")
@RequiredArgsConstructor
@RequestMapping("/api/product/")
public class ProductController {
    
    private final ProductService productService;
    
    @Transactional
    @PostMapping("/create")
    public ResponseEntity<ProductResponse> createProducts(@RequestBody CreateProductsRequest request) {
        return ResponseEntity.ok(productService.createProducts(request));
    }

    @Transactional
    @PostMapping("/update")
    public ResponseEntity<ProductResponse> updateProduct(@RequestBody UpdateProductRequest request) {
        return ResponseEntity.ok(productService.updateProduct(request));
    }

    @PostMapping("/delete")
    public ResponseEntity<String> deleteProduct(@RequestBody DeleteProductRequest request) {
        return ResponseEntity.ok(productService.deleteProduct(request));
    }

    @Transactional
    @GetMapping("/get")
    public ResponseEntity<ProductResponse> getProducts(@ModelAttribute GetRequest request) {
        return ResponseEntity.ok(productService.getProducts(request));
    }
}
