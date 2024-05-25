package com.backend.server.requests;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CreateShopRequest {
    
    private String shopName;
    private byte[] logo;
    private String styles;
    private String template;
    private String shopDescription;
    private String token;
}
