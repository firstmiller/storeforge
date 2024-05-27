package com.backend.server.requests;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CreateProductRequest {
    
    private String name;
    private String logo;
    private String description;
    private double price;
    private Integer quantity;
    private String shopName;
    private List<String> categories;
}
