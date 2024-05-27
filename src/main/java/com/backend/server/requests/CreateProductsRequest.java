package com.backend.server.requests;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class CreateProductsRequest {
    
    private List<CreateProductRequest> products;
}