package com.backend.server.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.server.requests.CategoryResponse;
import com.backend.server.requests.CreateCategoryRequest;
import com.backend.server.requests.DeleteCategoryRequest;
import com.backend.server.requests.GetRequest;
import com.backend.server.requests.UpdateCategoryRequest;
import com.backend.server.service.CategoryService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin("http://localhost:3000")
@RequiredArgsConstructor
@RequestMapping("/api/category/")
public class CategoryController {
    
    private final CategoryService categoryService;

    @Transactional
    @PostMapping("/create")
    public ResponseEntity<CategoryResponse> createCategory(@RequestBody CreateCategoryRequest request) {
        return ResponseEntity.ok(categoryService.createCategory(request));
    }

    @Transactional
    @GetMapping("/get")
    public ResponseEntity<List<CategoryResponse>> getCategory(@ModelAttribute GetRequest request) {
        return ResponseEntity.ok(categoryService.getCategory(request));
    }

    @Transactional
    @PostMapping("/update")
    public ResponseEntity<CategoryResponse> updateCategory(@RequestBody UpdateCategoryRequest request) {
        return ResponseEntity.ok(categoryService.updateCategory(request));
    }

    @Transactional
    @PostMapping("/delete")
    public ResponseEntity<CategoryResponse> deleteCategory(@RequestBody DeleteCategoryRequest request) {
        return ResponseEntity.ok(categoryService.deleteCategory(request));
    }
}
