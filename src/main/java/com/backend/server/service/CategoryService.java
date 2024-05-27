package com.backend.server.service;

import org.springframework.stereotype.Service;

import com.backend.server.repository.CategoryRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CategoryService {
    
    private final CategoryRepository categoryRepository;
    
}
