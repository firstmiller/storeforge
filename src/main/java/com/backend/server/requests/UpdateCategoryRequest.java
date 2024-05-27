package com.backend.server.requests;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class UpdateCategoryRequest {
    
    private String categoryName;
    private String newCategoryName;
}
