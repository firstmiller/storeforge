package com.backend.server.model;


import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.*;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "shops")
public class Shop {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "shop_id")
    private Long shopId;

    @Column(name = "shop_name", nullable = false, unique = true)
    private String shopName;

    @Lob
    @Column(name = "logo")
    private byte[] logo;

    @Lob
    @Column(name = "styles", columnDefinition = "TEXT")
    private String styles;

    @Column(name = "template")
    private String template;

    @Column(name = "shop_description")
    private String shop_description;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToMany(mappedBy = "shop")
    private Set<Product> products = new HashSet<>();

    @OneToMany(mappedBy = "shop")
    private Set<Category> categories = new HashSet<>();
    
    private Shop(ShopBuilder builder) {
        this.shopName = builder.shopName;
        this.shop_description = builder.shop_description;
        this.logo = builder.logo;
        this.styles = builder.styles;
        this.template = builder.template;
        this.user = builder.user;
        this.products = builder.products;
    }

    public static ShopBuilder builder() {
        return new ShopBuilder();
    }

        public static class ShopBuilder {
            private String shopName;
            private String shop_description;
            private byte[] logo;
            private String styles;
            private String template;
            private User user;

    
            public ShopBuilder shop_name(String shopName) {
                this.shopName = shopName;
                return this;
            }
    
            public ShopBuilder logo(byte[] logo) {
                this.logo = logo;
                return this;
            }
    
            public ShopBuilder styles(String styles) {
                this.styles = styles;
                return this;
            }
    
            public ShopBuilder template(String template) {
                this.template = template;
                return this;
            }

            public ShopBuilder shop_description(String shop_description) {
                this.shop_description = shop_description;
                return this;
            }
    
            public ShopBuilder user(User user) {
                this.user = user;
                return this;
            }

            public ShopBuilder products(Set<Product> products) {
                this.products = products;
                return this;
            }
    
            public Shop build() {
                return new Shop(this);
            }
        }

}