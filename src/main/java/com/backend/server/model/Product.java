package com.backend.server.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "products")
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Long productId;

    @Column(name = "product_name")
    private String productName;

    @ManyToOne
    @JoinColumn(name = "shop_id", nullable = false)
    private Shop shop;

    @Column(name = "price", columnDefinition = "money")
    private Double price;

    @Column(name = "quantity")
    private Integer quantity;

        public static class ProductBuilder {
            private Long productId;
            private String productName;
            private Shop shop;
            private Double price;
            private Integer quantity;
    
            public ProductBuilder setProductId(Long productId) {
                this.productId = productId;
                return this;
            }
    
            public ProductBuilder setProductName(String productName) {
                this.productName = productName;
                return this;
            }
    
            public ProductBuilder setShop(Shop shop) {
                this.shop = shop;
                return this;
            }
    
            public ProductBuilder setPrice(Double price) {
                this.price = price;
                return this;
            }
    
            public ProductBuilder setQuantity(Integer quantity) {
                this.quantity = quantity;
                return this;
            }
    
            public Product build() {
                Product product = new Product();
                product.setProductId(productId);
                product.setProductName(productName);
                product.setShop(shop);
                product.setPrice(price);
                product.setQuantity(quantity);
                return product;
            }
        }
    }
    

