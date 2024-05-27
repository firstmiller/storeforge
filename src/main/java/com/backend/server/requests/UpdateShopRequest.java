package com.backend.server.requests;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UpdateShopRequest {
    
    private String shopName;
    private String newShopName;
    private String shopDescription;
    private String logo;
    private String styles;
    private String template;
}
