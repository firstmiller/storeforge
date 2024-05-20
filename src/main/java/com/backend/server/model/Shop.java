package com.backend.server.model;


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

    @Column(name = "shop_name", nullable = false)
    private String shop_name;

    @Lob
    @Column(name = "logo", columnDefinition = "MEDIUMBLOB")
    private byte[] logo;

    @Lob
    @Column(name = "styles", columnDefinition = "LONGTEXT")
    private String styles;

    @Column(name = "template")
    private String template;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public void setStyles(String styles) {
        this.styles = styles;
    }
        public static class ShopBuilder {
            private Long shopId;
            private String shop_name;
            private byte[] logo;
            private String styles;
            private String template;
            private User user;
    
            public ShopBuilder shopId(Long shopId) {
                this.shopId = shopId;
                return this;
            }
    
            public ShopBuilder shop_name(String shop_name) {
                this.shop_name = shop_name;
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
    
            public ShopBuilder user(User user) {
                this.user = user;
                return this;
            }
    
            public Shop build() {
                Shop shop = new Shop();
                shop.setShopId(shopId);
                shop.setShop_name(shop_name);
                shop.setLogo(logo);
                shop.setStyles(styles);
                shop.setTemplate(template);
                shop.setUser(user);
                return shop;
            }
        }

}