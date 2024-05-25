package com.backend.server.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.backend.server.configuration.JwtUtil;
import com.backend.server.model.Shop;
import com.backend.server.repository.ShopRepository;
import com.backend.server.repository.UserRepository;
import com.backend.server.requests.CreateShopRequest;
import com.backend.server.requests.ShopResponse;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ShopService {
    
    private final ShopRepository shopRepository;
    private final JwtUtil jwtUtil;
    private final UserRepository userRepository;

    public ShopResponse createShop(String header, CreateShopRequest request)
    {
        var user = userRepository.findByUsername
        (jwtUtil.extractUsername
        (header));
        var shop = Shop.builder()
               .shop_name(request.getShopName())
               .logo(request.getLogo())
               .template(request.getTemplate())
               .user(user.get())
               .shop_description(request.getShopDescription())
               .styles(request.getStyles())
               .build();

        shopRepository.save(shop);
        return ShopResponse.builder()
               .shopName(request.getShopName())
               .build();
    }

    public ShopResponse updateShop(String header,CreateShopRequest request) {
        Shop shop = (Shop)shopRepository.findByShopName(request.getShopName());
            shop.setShopName(request.getShopName());
            shop.setLogo(request.getLogo());
            shop.setTemplate(request.getTemplate());
            shop.setShop_description(request.getShopDescription());
            shop.setStyles(request.getStyles());
            
        shopRepository.save(shop);
        return ShopResponse.builder()
               .shopName(request.getShopName())
               .build();
    }

    public ShopResponse deleteShop(String header, CreateShopRequest request) {
        Shop shop = (Shop)shopRepository.findByShopName(request.getShopName());
        shopRepository.delete(shop);
        return ShopResponse.builder()
               .shopName(request.getShopName())
               .build();
    }

    public List<Shop> getShop(String header) {
        var user = userRepository.findByUsername
        (jwtUtil.extractUsername
        (header));
        Optional<Shop> shop = shopRepository.findById(user.get().getId());
        return shop.map(List::of).orElse(List.of());
    }

}
