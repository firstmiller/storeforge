package com.backend.server.requests;

import java.util.Set;

import com.backend.server.model.Category;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CreateProductRequest {
    
    private String productName;
    private String productDescription;
    private String productPrice;
    private String productImage;
    private Set<Category> productCategory;
}
