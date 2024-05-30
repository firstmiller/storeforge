package com.backend.server.requests;

import java.math.BigDecimal;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UpdateProductRequest {
    
    private String name;
    private String newName;
    private String logo;
    private String description;
    private BigDecimal price;
    private Integer quantity;
    private String shopName;
    private List<String> categories;
}
