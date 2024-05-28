package com.backend.server.requests;

import java.util.List;

import com.backend.server.model.Product;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class ProductResponse {

    private List<Product> productNames;
}
