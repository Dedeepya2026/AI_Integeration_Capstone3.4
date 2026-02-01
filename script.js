// ===== PRODUCT DATA =====
const products = [
    {
        id: 1,
        name: "Premium Memory Foam Travel Neck Pillow - Soft Support",
        image: "https://picsum.photos/seed/neckpillow/400/400",
        price: 8.13,
        originalPrice: 24.99,
        badge: "2pcs",
        category: "home"
    },
    {
        id: 2,
        name: "Women's Fashion Pink Crossbody Shoulder Handbag Purse",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
        price: 4.09,
        originalPrice: 12.49,
        badge: "Hot",
        category: "bags"
    },
    {
        id: 3,
        name: "Professional Electric Hair Clipper Trimmer Set for Men",
        image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=400&fit=crop",
        price: 33.87,
        originalPrice: 52.93,
        badge: "4pcs",
        category: "grooming"
    },
    {
        id: 4,
        name: "Adjustable Height Standing Desk Home Office Computer Table",
        image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&h=400&fit=crop",
        price: 21.07,
        originalPrice: 107.52,
        badge: "Sale",
        category: "furniture"
    },
    {
        id: 5,
        name: "Air Fryer Disposable Paper Liners 100pcs Non-Stick",
        image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=400&h=400&fit=crop",
        price: 2.45,
        originalPrice: 6.48,
        badge: "100pcs",
        category: "kitchen"
    },
    {
        id: 6,
        name: "VUB Premium Wireless Bluetooth Headphones with Active Noise Cancellation",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        price: 29.04,
        originalPrice: 79.99,
        badge: "Hot",
        category: "electronics"
    },
    {
        id: 7,
        name: "Luxury Massage Chair Full Body Relaxation Recliner",
        image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&h=400&fit=crop",
        price: 187.67,
        originalPrice: 399.99,
        badge: "Sale",
        category: "furniture"
    },
    {
        id: 8,
        name: "Valentine's Day Heart Shaped LED Light String Decoration",
        image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=400&fit=crop",
        price: 5.99,
        originalPrice: 14.99,
        badge: "Valentine",
        category: "valentine"
    },
    {
        id: 9,
        name: "Portable Mini Projector 4K HD Home Cinema Theater System",
        image: "https://picsum.photos/seed/projector/400/400",
        price: 45.89,
        originalPrice: 129.99,
        badge: "Hot",
        category: "electronics"
    },
    {
        id: 10,
        name: "Wireless Charging Station 3-in-1 for Phone Watch and Earbuds",
        image: "https://images.unsplash.com/photo-1608755728617-aefab37d2edd?w=400&h=400&fit=crop",
        price: 18.76,
        originalPrice: 45.99,
        badge: "Sale",
        category: "electronics"
    },
    {
        id: 11,
        name: "Women's Crossbody Bag Leather Shoulder Handbag Fashion Purse",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
        price: 15.99,
        originalPrice: 39.99,
        badge: "Hot",
        category: "bags"
    },
    {
        id: 12,
        name: "Men's Running Shoes Breathable Athletic Sports Sneakers",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
        price: 24.99,
        originalPrice: 59.99,
        badge: "Sale",
        category: "shoes"
    },
    {
        id: 13,
        name: "Valentine's Day Rose Bear Gift Box Romantic Love Present",
        image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=400&h=400&fit=crop",
        price: 12.99,
        originalPrice: 29.99,
        badge: "Valentine",
        category: "valentine"
    },
    {
        id: 14,
        name: "Women's Canvas Tote Bag Large Capacity Shopping Handbag",
        image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=400&fit=crop",
        price: 8.99,
        originalPrice: 19.99,
        badge: "New",
        category: "bags"
    },
    {
        id: 15,
        name: "Women's High Heels Elegant Pointed Toe Stiletto Pumps Shoes",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop",
        price: 32.99,
        originalPrice: 75.99,
        badge: "Hot",
        category: "shoes"
    },
    {
        id: 16,
        name: "Valentine's Day Heart Necklace Gold Plated Love Pendant",
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=400&fit=crop",
        price: 9.99,
        originalPrice: 24.99,
        badge: "Valentine",
        category: "valentine"
    },
    {
        id: 17,
        name: "Men's Casual Leather Loafers Slip-On Driving Shoes",
        image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400&h=400&fit=crop",
        price: 28.99,
        originalPrice: 65.99,
        badge: "Sale",
        category: "shoes"
    },
    {
        id: 18,
        name: "Women's Backpack Fashion Travel School Bag Laptop Rucksack",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        price: 18.99,
        originalPrice: 42.99,
        badge: "Hot",
        category: "bags"
    },
    {
        id: 19,
        name: "Valentine's Day Chocolate Gift Box Heart Shape Romance Set",
        image: "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=400&h=400&fit=crop",
        price: 16.99,
        originalPrice: 34.99,
        badge: "Valentine",
        category: "valentine"
    },
    {
        id: 20,
        name: "Women's Fashion Sneakers Comfortable Walking Shoes",
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop",
        price: 22.99,
        originalPrice: 49.99,
        badge: "New",
        category: "shoes"
    },
    {
        id: 21,
        name: "Mini Clutch Bag Evening Party Handbag Chain Strap Purse",
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=400&fit=crop",
        price: 11.99,
        originalPrice: 28.99,
        badge: "Hot",
        category: "bags"
    },
    {
        id: 22,
        name: "Valentine's Day Teddy Bear Plush Love Heart Gift",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
        price: 14.99,
        originalPrice: 32.99,
        badge: "Valentine",
        category: "valentine"
    },
    {
        id: 23,
        name: "Valentine's Day Red Roses Bouquet Artificial Flowers Gift",
        image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=400&h=400&fit=crop",
        price: 19.99,
        originalPrice: 45.99,
        badge: "Valentine",
        category: "valentine"
    },
    {
        id: 24,
        name: "Valentine's Day Couple Matching Bracelets Love Heart Set",
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop",
        price: 8.99,
        originalPrice: 22.99,
        badge: "Valentine",
        category: "valentine"
    },
    {
        id: 25,
        name: "Valentine's Day Romantic Candle Set Rose Scented Gift",
        image: "https://images.unsplash.com/photo-1602874801006-7f93f69b3a77?w=400&h=400&fit=crop",
        price: 12.99,
        originalPrice: 28.99,
        badge: "Valentine",
        category: "valentine"
    },
    {
        id: 26,
        name: "Valentine's Day Photo Frame Love Heart Couple Picture",
        image: "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?w=400&h=400&fit=crop",
        price: 7.99,
        originalPrice: 18.99,
        badge: "Valentine",
        category: "valentine"
    },
    {
        id: 27,
        name: "Valentine's Day Jewelry Box Heart Shape Ring Storage",
        image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&h=400&fit=crop",
        price: 11.99,
        originalPrice: 26.99,
        badge: "Valentine",
        category: "valentine"
    },
    {
        id: 28,
        name: "Valentine's Day Love Letter Card Set Romantic Greeting",
        image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=400&fit=crop",
        price: 5.99,
        originalPrice: 12.99,
        badge: "Valentine",
        category: "valentine"
    },
    {
        id: 29,
        name: "Valentine's Day Couple Pillow Set Heart Design Cushion",
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=400&fit=crop",
        price: 18.99,
        originalPrice: 39.99,
        badge: "Valentine",
        category: "valentine"
    },
    {
        id: 30,
        name: "Valentine's Day Wine Glass Set Romantic Dinner Gift",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=400&fit=crop",
        price: 24.99,
        originalPrice: 52.99,
        badge: "Valentine",
        category: "valentine"
    },
    {
        id: 31,
        name: "Valentine's Day Keychain Couple Set Matching Love Heart",
        image: "https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=400&h=400&fit=crop",
        price: 6.99,
        originalPrice: 15.99,
        badge: "Valentine",
        category: "valentine"
    },
    {
        id: 32,
        name: "Valentine's Day Music Box Heart Shape Romantic Gift",
        image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&h=400&fit=crop",
        price: 21.99,
        originalPrice: 48.99,
        badge: "Valentine",
        category: "valentine"
    },
    // ===== LAPTOPS =====
    {
        id: 33,
        name: "Ultra Slim Laptop 15.6 inch Full HD Display Intel Core i5",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
        price: 459.99,
        originalPrice: 699.99,
        badge: "Hot",
        category: "laptops"
    },
    {
        id: 34,
        name: "Gaming Laptop 17.3 inch RTX Graphics RGB Keyboard",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
        price: 899.99,
        originalPrice: 1299.99,
        badge: "Sale",
        category: "laptops"
    },
    {
        id: 35,
        name: "MacBook Style Laptop 14 inch Retina Display Aluminum Body",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
        price: 549.99,
        originalPrice: 849.99,
        badge: "New",
        category: "laptops"
    },
    {
        id: 36,
        name: "Business Laptop 13.3 inch Lightweight Portable Notebook",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop",
        price: 379.99,
        originalPrice: 599.99,
        badge: "Hot",
        category: "laptops"
    },
    {
        id: 37,
        name: "2-in-1 Convertible Laptop Touchscreen Tablet Mode",
        image: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=400&h=400&fit=crop",
        price: 429.99,
        originalPrice: 649.99,
        badge: "Sale",
        category: "laptops"
    },
    {
        id: 38,
        name: "Chromebook Laptop 11.6 inch Long Battery Life Student",
        image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop",
        price: 199.99,
        originalPrice: 349.99,
        badge: "Hot",
        category: "laptops"
    },
    {
        id: 39,
        name: "Workstation Laptop 15.6 inch 32GB RAM Professional",
        image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400&h=400&fit=crop",
        price: 1199.99,
        originalPrice: 1799.99,
        badge: "Pro",
        category: "laptops"
    },
    {
        id: 40,
        name: "Budget Laptop 14 inch Office Work Home Use Basic",
        image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&h=400&fit=crop",
        price: 249.99,
        originalPrice: 399.99,
        badge: "Sale",
        category: "laptops"
    },
    {
        id: 41,
        name: "Ultra Book Laptop 13 inch 4K Display Premium Build",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop",
        price: 699.99,
        originalPrice: 999.99,
        badge: "New",
        category: "laptops"
    },
    {
        id: 42,
        name: "Refurbished Laptop 15 inch i7 Processor Great Value",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop",
        price: 329.99,
        originalPrice: 549.99,
        badge: "Deal",
        category: "laptops"
    },
    // ===== HAIR CLIPS =====
    {
        id: 43,
        name: "Pearl Hair Clips Set Elegant Fashion Accessories Women",
        image: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 6.99,
        originalPrice: 14.99,
        badge: "Hot",
        category: "hairclips"
    },
    {
        id: 44,
        name: "Butterfly Hair Clips Colorful Kids Girls Cute Set",
        image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 4.99,
        originalPrice: 9.99,
        badge: "New",
        category: "hairclips"
    },
    {
        id: 45,
        name: "Metal Claw Clips Large Strong Hold Hair Accessories",
        image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 7.99,
        originalPrice: 15.99,
        badge: "Sale",
        category: "hairclips"
    },
    {
        id: 46,
        name: "Rhinestone Hair Clips Sparkle Crystal Wedding Party",
        image: "https://images.pexels.com/photos/1232131/pexels-photo-1232131.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 8.99,
        originalPrice: 18.99,
        badge: "Hot",
        category: "hairclips"
    },
    {
        id: 47,
        name: "Vintage Hair Pins Bobby Pins Set Gold Silver Bronze",
        image: "https://images.pexels.com/photos/3373715/pexels-photo-3373715.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 5.99,
        originalPrice: 12.99,
        badge: "New",
        category: "hairclips"
    },
    {
        id: 48,
        name: "Flower Hair Clips Floral Rose Wedding Bridal Set",
        image: "https://images.pexels.com/photos/1362558/pexels-photo-1362558.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 9.99,
        originalPrice: 19.99,
        badge: "Sale",
        category: "hairclips"
    },
    {
        id: 49,
        name: "Acrylic Hair Clips Tortoise Shell Pattern Fashion",
        image: "https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 6.49,
        originalPrice: 13.99,
        badge: "Hot",
        category: "hairclips"
    },
    {
        id: 50,
        name: "Kids Hair Clips Bow Tie Ribbon Cute Girls Set 20pcs",
        image: "https://images.pexels.com/photos/3373738/pexels-photo-3373738.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 7.99,
        originalPrice: 16.99,
        badge: "20pcs",
        category: "hairclips"
    },
    {
        id: 51,
        name: "Minimalist Hair Clips Geometric Simple Modern Style",
        image: "https://images.pexels.com/photos/3373737/pexels-photo-3373737.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 5.49,
        originalPrice: 11.99,
        badge: "New",
        category: "hairclips"
    },
    {
        id: 52,
        name: "Banana Hair Clips Large Size Strong Hold Women",
        image: "https://images.pexels.com/photos/3373735/pexels-photo-3373735.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 4.99,
        originalPrice: 10.99,
        badge: "Sale",
        category: "hairclips"
    },
    // ===== BANGLES =====
    {
        id: 53,
        name: "Gold Plated Bangles Set Traditional Indian Design 6pcs",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
        price: 12.99,
        originalPrice: 28.99,
        badge: "6pcs",
        category: "bangles"
    },
    {
        id: 54,
        name: "Silver Bangle Bracelet Elegant Women Fashion Jewelry",
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop",
        price: 9.99,
        originalPrice: 22.99,
        badge: "Hot",
        category: "bangles"
    },
    {
        id: 55,
        name: "Crystal Bangles Set Sparkle Rhinestone Party Wear",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
        price: 14.99,
        originalPrice: 32.99,
        badge: "Sale",
        category: "bangles"
    },
    {
        id: 56,
        name: "Charm Bangle Bracelet Heart Star Moon Pendant Women",
        image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=400&fit=crop",
        price: 8.99,
        originalPrice: 18.99,
        badge: "New",
        category: "bangles"
    },
    {
        id: 57,
        name: "Wooden Bangles Set Natural Eco-Friendly Boho Style",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
        price: 7.99,
        originalPrice: 15.99,
        badge: "Hot",
        category: "bangles"
    },
    {
        id: 58,
        name: "Pearl Bangles Elegant Wedding Bridal Jewelry Set",
        image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=400&fit=crop",
        price: 16.99,
        originalPrice: 35.99,
        badge: "Sale",
        category: "bangles"
    },
    {
        id: 59,
        name: "Colorful Bangles Set Rainbow Stackable Bracelets 12pcs",
        image: "https://images.unsplash.com/photo-1601821765780-754fa98637c1?w=400&h=400&fit=crop",
        price: 6.99,
        originalPrice: 14.99,
        badge: "12pcs",
        category: "bangles"
    },
    {
        id: 60,
        name: "Kundan Bangles Traditional Ethnic Indian Wedding",
        image: "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=400&h=400&fit=crop",
        price: 18.99,
        originalPrice: 39.99,
        badge: "Hot",
        category: "bangles"
    },
    {
        id: 61,
        name: "Cuff Bangle Wide Statement Bracelet Women Fashion",
        image: "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=400&h=400&fit=crop",
        price: 11.99,
        originalPrice: 24.99,
        badge: "New",
        category: "bangles"
    },
    {
        id: 62,
        name: "Rose Gold Bangle Set Minimalist Everyday Wear 4pcs",
        image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&h=400&fit=crop",
        price: 13.99,
        originalPrice: 29.99,
        badge: "4pcs",
        category: "bangles"
    },
    // ===== DAILY ESSENTIALS =====
    {
        id: 63,
        name: "Water Bottle Stainless Steel Insulated 500ml Travel",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
        price: 12.99,
        originalPrice: 24.99,
        badge: "Hot",
        category: "daily"
    },
    {
        id: 64,
        name: "Umbrella Compact Folding Windproof Travel Size",
        image: "https://picsum.photos/seed/umbrella/400/400",
        price: 9.99,
        originalPrice: 19.99,
        badge: "Sale",
        category: "daily"
    },
    {
        id: 65,
        name: "Sunglasses UV Protection Polarized Fashion Unisex",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
        price: 14.99,
        originalPrice: 29.99,
        badge: "Hot",
        category: "daily"
    },
    {
        id: 66,
        name: "Wallet Men Leather Slim Bifold RFID Blocking Card",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
        price: 16.99,
        originalPrice: 34.99,
        badge: "New",
        category: "daily"
    },
    {
        id: 67,
        name: "Watch Digital Sports Fitness Tracker Waterproof",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        price: 24.99,
        originalPrice: 49.99,
        badge: "Hot",
        category: "daily"
    },
    {
        id: 68,
        name: "Keychain Organizer Leather Key Holder Compact Smart",
        image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=400&fit=crop",
        price: 7.99,
        originalPrice: 15.99,
        badge: "Sale",
        category: "daily"
    },
    {
        id: 69,
        name: "Phone Stand Holder Adjustable Desktop Foldable",
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
        price: 8.99,
        originalPrice: 17.99,
        badge: "Hot",
        category: "daily"
    },
    {
        id: 70,
        name: "Travel Organizer Bag Toiletry Cosmetic Pouch Hanging",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
        price: 11.99,
        originalPrice: 23.99,
        badge: "New",
        category: "daily"
    },
    {
        id: 71,
        name: "Face Mask Reusable Cotton Washable Fashion 5 Pack",
        image: "https://picsum.photos/seed/facemask/400/400",
        price: 6.99,
        originalPrice: 14.99,
        badge: "5pcs",
        category: "daily"
    },
    {
        id: 72,
        name: "Power Bank 10000mAh Portable Charger Fast Charging",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
        price: 19.99,
        originalPrice: 39.99,
        badge: "Hot",
        category: "daily"
    },
    // ===== WATER BOTTLES (20 products) =====
    {
        id: 73,
        name: "Stainless Steel Water Bottle 1L Large Capacity Sports",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
        price: 15.99,
        originalPrice: 29.99,
        badge: "Hot",
        category: "waterbottles"
    },
    {
        id: 74,
        name: "Insulated Water Bottle 500ml Hot Cold Double Wall",
        image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=400&fit=crop",
        price: 12.99,
        originalPrice: 24.99,
        badge: "Sale",
        category: "waterbottles"
    },
    {
        id: 75,
        name: "Glass Water Bottle with Sleeve Eco Friendly BPA Free",
        image: "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=400&h=400&fit=crop",
        price: 9.99,
        originalPrice: 19.99,
        badge: "New",
        category: "waterbottles"
    },
    {
        id: 76,
        name: "Kids Water Bottle Cute Cartoon Design Leak Proof",
        image: "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?w=400&h=400&fit=crop",
        price: 7.99,
        originalPrice: 14.99,
        badge: "Hot",
        category: "waterbottles"
    },
    {
        id: 77,
        name: "Motivational Water Bottle Time Marker 2L Gym Fitness",
        image: "https://images.unsplash.com/photo-1559839914-17aae19cec71?w=400&h=400&fit=crop",
        price: 11.99,
        originalPrice: 22.99,
        badge: "Sale",
        category: "waterbottles"
    },
    {
        id: 78,
        name: "Collapsible Water Bottle Silicone Portable Travel",
        image: "https://picsum.photos/seed/siliconebottle/400/400",
        price: 8.99,
        originalPrice: 17.99,
        badge: "New",
        category: "waterbottles"
    },
    {
        id: 79,
        name: "Sports Water Bottle with Straw 750ml Cycling Running",
        image: "https://images.unsplash.com/photo-1544716278-e513176f20b5?w=400&h=400&fit=crop",
        price: 10.99,
        originalPrice: 21.99,
        badge: "Hot",
        category: "waterbottles"
    },
    {
        id: 80,
        name: "Copper Water Bottle Ayurvedic Health Benefits 1L",
        image: "https://images.unsplash.com/photo-1625708458528-802ec79b1ed8?w=400&h=400&fit=crop",
        price: 18.99,
        originalPrice: 34.99,
        badge: "Premium",
        category: "waterbottles"
    },
    {
        id: 81,
        name: "Smart Water Bottle LED Temperature Display Reminder",
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=400&fit=crop",
        price: 24.99,
        originalPrice: 49.99,
        badge: "Smart",
        category: "waterbottles"
    },
    {
        id: 82,
        name: "Fruit Infuser Water Bottle Detox Health 800ml",
        image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=400&h=400&fit=crop",
        price: 13.99,
        originalPrice: 26.99,
        badge: "Hot",
        category: "waterbottles"
    },
    // ===== SWEATERS (20 products) =====
    {
        id: 83,
        name: "Men's Wool Sweater Crew Neck Warm Winter Pullover",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
        price: 34.99,
        originalPrice: 64.99,
        badge: "Hot",
        category: "sweaters"
    },
    {
        id: 84,
        name: "Women's Cashmere Sweater Soft Cozy Elegant Fashion",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
        price: 42.99,
        originalPrice: 84.99,
        badge: "Premium",
        category: "sweaters"
    },
    {
        id: 85,
        name: "Cable Knit Sweater Chunky Oversized Unisex Warm",
        image: "https://images.unsplash.com/photo-1608257036500-41tried5cfc6?w=400&h=400&fit=crop",
        price: 29.99,
        originalPrice: 54.99,
        badge: "Sale",
        category: "sweaters"
    },
    {
        id: 86,
        name: "Turtleneck Sweater Men's Slim Fit Casual Knit",
        image: "https://images.unsplash.com/photo-1638718855281-9cec9c63dac2?w=400&h=400&fit=crop",
        price: 27.99,
        originalPrice: 49.99,
        badge: "New",
        category: "sweaters"
    },
    {
        id: 87,
        name: "Women's Cardigan Sweater Button Front Long Sleeve",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop",
        price: 32.99,
        originalPrice: 59.99,
        badge: "Hot",
        category: "sweaters"
    },
    {
        id: 88,
        name: "V-Neck Sweater Men's Classic Business Casual Wool",
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
        price: 31.99,
        originalPrice: 56.99,
        badge: "Sale",
        category: "sweaters"
    },
    {
        id: 89,
        name: "Women's Cropped Sweater Y2K Fashion Trendy Style",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop",
        price: 24.99,
        originalPrice: 44.99,
        badge: "Trendy",
        category: "sweaters"
    },
    {
        id: 90,
        name: "Kids Sweater Cute Animal Print Warm Winter Children",
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=400&fit=crop",
        price: 19.99,
        originalPrice: 34.99,
        badge: "Kids",
        category: "sweaters"
    },
    {
        id: 91,
        name: "Striped Sweater Unisex Vintage Retro Colorful Knit",
        image: "https://images.unsplash.com/photo-1584670747417-594a9412fba5?w=400&h=400&fit=crop",
        price: 26.99,
        originalPrice: 48.99,
        badge: "Retro",
        category: "sweaters"
    },
    {
        id: 92,
        name: "Half-Zip Sweater Men's Sporty Casual Pullover",
        image: "https://images.unsplash.com/photo-1609743522471-83c84ce23e32?w=400&h=400&fit=crop",
        price: 28.99,
        originalPrice: 52.99,
        badge: "Hot",
        category: "sweaters"
    },
    // ===== T-SHIRTS (20 products) =====
    {
        id: 93,
        name: "Men's Basic Cotton T-Shirt Crew Neck Casual 3-Pack",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
        price: 19.99,
        originalPrice: 39.99,
        badge: "3pcs",
        category: "tshirts"
    },
    {
        id: 94,
        name: "Women's V-Neck T-Shirt Slim Fit Soft Cotton Blend",
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=400&fit=crop",
        price: 14.99,
        originalPrice: 28.99,
        badge: "Hot",
        category: "tshirts"
    },
    {
        id: 95,
        name: "Graphic Print T-Shirt Unisex Streetwear Fashion",
        image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd0?w=400&h=400&fit=crop",
        price: 17.99,
        originalPrice: 32.99,
        badge: "Trendy",
        category: "tshirts"
    },
    {
        id: 96,
        name: "Polo T-Shirt Men's Classic Collar Business Casual",
        image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop",
        price: 22.99,
        originalPrice: 42.99,
        badge: "Sale",
        category: "tshirts"
    },
    {
        id: 97,
        name: "Women's Crop Top T-Shirt Summer Fashion Casual",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop",
        price: 12.99,
        originalPrice: 24.99,
        badge: "Hot",
        category: "tshirts"
    },
    {
        id: 98,
        name: "Oversized T-Shirt Unisex Baggy Streetwear Hip Hop",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
        price: 16.99,
        originalPrice: 31.99,
        badge: "New",
        category: "tshirts"
    },
    {
        id: 99,
        name: "Long Sleeve T-Shirt Men's Casual Fitted Cotton",
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop",
        price: 18.99,
        originalPrice: 34.99,
        badge: "Sale",
        category: "tshirts"
    },
    {
        id: 100,
        name: "Kids Cartoon T-Shirt Boys Girls Cute Print Fun",
        image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=400&fit=crop",
        price: 11.99,
        originalPrice: 22.99,
        badge: "Kids",
        category: "tshirts"
    },
    {
        id: 101,
        name: "Athletic Dry-Fit T-Shirt Sports Gym Workout Quick",
        image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=400&fit=crop",
        price: 15.99,
        originalPrice: 29.99,
        badge: "Sport",
        category: "tshirts"
    },
    {
        id: 102,
        name: "Tie-Dye T-Shirt Colorful Hippie Festival Unisex",
        image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop",
        price: 14.99,
        originalPrice: 27.99,
        badge: "Trendy",
        category: "tshirts"
    },
    // ===== PANTS (20 products) =====
    {
        id: 103,
        name: "Men's Chino Pants Slim Fit Casual Cotton Business",
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop",
        price: 29.99,
        originalPrice: 54.99,
        badge: "Hot",
        category: "pants"
    },
    {
        id: 104,
        name: "Women's High Waist Jeans Skinny Stretch Denim",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop",
        price: 34.99,
        originalPrice: 64.99,
        badge: "Sale",
        category: "pants"
    },
    {
        id: 105,
        name: "Jogger Pants Unisex Casual Sweatpants Comfortable",
        image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&h=400&fit=crop",
        price: 24.99,
        originalPrice: 44.99,
        badge: "Hot",
        category: "pants"
    },
    {
        id: 106,
        name: "Cargo Pants Men's Multi-Pocket Tactical Outdoor",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop",
        price: 32.99,
        originalPrice: 59.99,
        badge: "New",
        category: "pants"
    },
    {
        id: 107,
        name: "Women's Wide Leg Pants Palazzo Flowy Elegant",
        image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=400&h=400&fit=crop",
        price: 27.99,
        originalPrice: 49.99,
        badge: "Trendy",
        category: "pants"
    },
    {
        id: 108,
        name: "Formal Dress Pants Men's Office Business Trousers",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        price: 36.99,
        originalPrice: 69.99,
        badge: "Sale",
        category: "pants"
    },
    {
        id: 109,
        name: "Leggings Pants Women's High Waist Yoga Workout",
        image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=400&fit=crop",
        price: 19.99,
        originalPrice: 36.99,
        badge: "Hot",
        category: "pants"
    },
    {
        id: 110,
        name: "Kids Pants Boys Girls Elastic Waist Comfortable",
        image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=400&fit=crop",
        price: 16.99,
        originalPrice: 29.99,
        badge: "Kids",
        category: "pants"
    },
    {
        id: 111,
        name: "Corduroy Pants Men's Vintage Retro Style Casual",
        image: "https://images.unsplash.com/photo-1584865288642-42078afe6942?w=400&h=400&fit=crop",
        price: 31.99,
        originalPrice: 57.99,
        badge: "Retro",
        category: "pants"
    },
    {
        id: 112,
        name: "Track Pants Athletic Sports Training Jogger Unisex",
        image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=400&fit=crop",
        price: 22.99,
        originalPrice: 41.99,
        badge: "Sport",
        category: "pants"
    },
    // ===== HOODIES (20 products) =====
    {
        id: 113,
        name: "Men's Pullover Hoodie Classic Fleece Warm Casual",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
        price: 29.99,
        originalPrice: 54.99,
        badge: "Hot",
        category: "hoodies"
    },
    {
        id: 114,
        name: "Women's Cropped Hoodie Fashion Trendy Short Style",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop",
        price: 24.99,
        originalPrice: 44.99,
        badge: "Trendy",
        category: "hoodies"
    },
    {
        id: 115,
        name: "Zip-Up Hoodie Unisex Full Zipper Streetwear Fashion",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop",
        price: 32.99,
        originalPrice: 59.99,
        badge: "Sale",
        category: "hoodies"
    },
    {
        id: 116,
        name: "Oversized Hoodie Blanket Wearable Cozy Warm Giant",
        image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=400&h=400&fit=crop",
        price: 39.99,
        originalPrice: 74.99,
        badge: "Premium",
        category: "hoodies"
    },
    {
        id: 117,
        name: "Graphic Print Hoodie Anime Streetwear Urban Hip Hop",
        image: "https://images.unsplash.com/photo-1620799140188-c2e040dc9cc4?w=400&h=400&fit=crop",
        price: 34.99,
        originalPrice: 62.99,
        badge: "Hot",
        category: "hoodies"
    },
    {
        id: 118,
        name: "Kids Hoodie Cartoon Character Print Warm Children",
        image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=400&fit=crop",
        price: 21.99,
        originalPrice: 39.99,
        badge: "Kids",
        category: "hoodies"
    },
    {
        id: 119,
        name: "Athletic Sports Hoodie Gym Workout Training Men's",
        image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=400&fit=crop",
        price: 27.99,
        originalPrice: 49.99,
        badge: "Sport",
        category: "hoodies"
    },
    {
        id: 120,
        name: "Women's Floral Embroidered Hoodie Cute Kawaii",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
        price: 31.99,
        originalPrice: 57.99,
        badge: "New",
        category: "hoodies"
    },
    {
        id: 121,
        name: "Color Block Hoodie Retro Vintage Style Unisex",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=400&fit=crop",
        price: 28.99,
        originalPrice: 52.99,
        badge: "Retro",
        category: "hoodies"
    },
    {
        id: 122,
        name: "Tech Fleece Hoodie Premium Warm Lightweight Modern",
        image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=400&h=400&fit=crop",
        price: 44.99,
        originalPrice: 84.99,
        badge: "Premium",
        category: "hoodies"
    },
    // ===== SWEATSHIRTS (20 products) =====
    {
        id: 123,
        name: "Crewneck Sweatshirt Men's Classic Cotton Blend Warm",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
        price: 26.99,
        originalPrice: 48.99,
        badge: "Hot",
        category: "sweatshirts"
    },
    {
        id: 124,
        name: "Women's Oversized Sweatshirt Cozy Baggy Comfortable",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop",
        price: 24.99,
        originalPrice: 44.99,
        badge: "Sale",
        category: "sweatshirts"
    },
    {
        id: 125,
        name: "College Logo Sweatshirt University Style Vintage",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop",
        price: 29.99,
        originalPrice: 54.99,
        badge: "College",
        category: "sweatshirts"
    },
    {
        id: 126,
        name: "Half-Zip Sweatshirt Pullover Sporty Casual Unisex",
        image: "https://images.unsplash.com/photo-1609743522471-83c84ce23e32?w=400&h=400&fit=crop",
        price: 31.99,
        originalPrice: 56.99,
        badge: "New",
        category: "sweatshirts"
    },
    {
        id: 127,
        name: "Graphic Print Sweatshirt Artistic Design Statement",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
        price: 27.99,
        originalPrice: 49.99,
        badge: "Hot",
        category: "sweatshirts"
    },
    {
        id: 128,
        name: "Kids Sweatshirt Cartoon Fun Print Boys Girls",
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=400&fit=crop",
        price: 18.99,
        originalPrice: 34.99,
        badge: "Kids",
        category: "sweatshirts"
    },
    {
        id: 129,
        name: "Fleece Lined Sweatshirt Extra Warm Winter Cozy",
        image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=400&h=400&fit=crop",
        price: 34.99,
        originalPrice: 64.99,
        badge: "Warm",
        category: "sweatshirts"
    },
    {
        id: 130,
        name: "Minimalist Sweatshirt Plain Solid Color Basic",
        image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=400&fit=crop",
        price: 22.99,
        originalPrice: 41.99,
        badge: "Basic",
        category: "sweatshirts"
    },
    {
        id: 131,
        name: "Embroidered Sweatshirt Women's Elegant Detail Chic",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop",
        price: 32.99,
        originalPrice: 59.99,
        badge: "Sale",
        category: "sweatshirts"
    },
    {
        id: 132,
        name: "Tie-Dye Sweatshirt Colorful Fashion Trendy Unisex",
        image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop",
        price: 28.99,
        originalPrice: 52.99,
        badge: "Trendy",
        category: "sweatshirts"
    },
    // ===== MOBILE PHONES (20 products) =====
    {
        id: 133,
        name: "Smartphone 6.5 inch 128GB Android 5G Fast Charging",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
        price: 299.99,
        originalPrice: 499.99,
        badge: "Hot",
        category: "phones"
    },
    {
        id: 134,
        name: "Budget Phone 6.1 inch 64GB Android Dual SIM Card",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
        price: 149.99,
        originalPrice: 249.99,
        badge: "Deal",
        category: "phones"
    },
    {
        id: 135,
        name: "Gaming Phone 6.7 inch 256GB High Refresh Rate RGB",
        image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=400&h=400&fit=crop",
        price: 449.99,
        originalPrice: 699.99,
        badge: "Gaming",
        category: "phones"
    },
    {
        id: 136,
        name: "Camera Phone 108MP Quad Camera Night Mode Pro",
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop",
        price: 379.99,
        originalPrice: 599.99,
        badge: "Camera",
        category: "phones"
    },
    {
        id: 137,
        name: "Foldable Phone Flip Style Compact Innovative Design",
        image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=400&fit=crop",
        price: 699.99,
        originalPrice: 999.99,
        badge: "Premium",
        category: "phones"
    },
    {
        id: 138,
        name: "Kids Phone Basic Simple Easy Use Parental Control",
        image: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=400&h=400&fit=crop",
        price: 79.99,
        originalPrice: 129.99,
        badge: "Kids",
        category: "phones"
    },
    {
        id: 139,
        name: "Senior Phone Large Buttons Big Display SOS Emergency",
        image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=400&fit=crop",
        price: 69.99,
        originalPrice: 119.99,
        badge: "Senior",
        category: "phones"
    },
    {
        id: 140,
        name: "Rugged Phone Waterproof Shockproof Outdoor Adventure",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop",
        price: 249.99,
        originalPrice: 399.99,
        badge: "Rugged",
        category: "phones"
    },
    {
        id: 141,
        name: "Slim Phone Ultra Thin 6.4 inch Lightweight Stylish",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886f5b?w=400&h=400&fit=crop",
        price: 329.99,
        originalPrice: 529.99,
        badge: "Slim",
        category: "phones"
    },
    {
        id: 142,
        name: "Big Battery Phone 6000mAh Long Lasting Power Bank",
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=400&fit=crop",
        price: 199.99,
        originalPrice: 329.99,
        badge: "Battery",
        category: "phones"
    },
    // ===== KIDS TOYS (10 products) =====
    {
        id: 143,
        name: "Building Blocks Set 500 Pieces Educational Creative STEM",
        image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=400&fit=crop",
        price: 24.99,
        originalPrice: 49.99,
        badge: "Hot",
        category: "toys"
    },
    {
        id: 144,
        name: "Remote Control Car RC Racing High Speed Off Road",
        image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=400&h=400&fit=crop",
        price: 29.99,
        originalPrice: 54.99,
        badge: "New",
        category: "toys"
    },
    {
        id: 145,
        name: "Doll House Miniature Furniture Set DIY Dream House",
        image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=400&fit=crop",
        price: 34.99,
        originalPrice: 69.99,
        badge: "Sale",
        category: "toys"
    },
    {
        id: 146,
        name: "Puzzle Set 1000 Pieces Educational Brain Teaser Game",
        image: "https://images.unsplash.com/photo-1494059980473-813e73ee784b?w=400&h=400&fit=crop",
        price: 12.99,
        originalPrice: 24.99,
        badge: "Hot",
        category: "toys"
    },
    {
        id: 147,
        name: "Play Kitchen Set Cooking Pretend Food Toys Kids",
        image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop",
        price: 39.99,
        originalPrice: 79.99,
        badge: "Sale",
        category: "toys"
    },
    {
        id: 148,
        name: "Action Figure Set Superhero Collection 6 Pack",
        image: "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?w=400&h=400&fit=crop",
        price: 19.99,
        originalPrice: 39.99,
        badge: "6pcs",
        category: "toys"
    },
    {
        id: 149,
        name: "Toy Train Set Electric Railway Track Kids Play",
        image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&h=400&fit=crop",
        price: 44.99,
        originalPrice: 89.99,
        badge: "Hot",
        category: "toys"
    },
    {
        id: 150,
        name: "Board Game Family Fun Night Strategy Educational",
        image: "https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?w=400&h=400&fit=crop",
        price: 18.99,
        originalPrice: 34.99,
        badge: "New",
        category: "toys"
    },
    {
        id: 151,
        name: "Art Supplies Kit Crayons Markers Drawing Set Kids",
        image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&h=400&fit=crop",
        price: 15.99,
        originalPrice: 29.99,
        badge: "Art",
        category: "toys"
    },
    {
        id: 152,
        name: "Outdoor Sports Toys Set Ball Games Frisbee Kids Play",
        image: "https://images.unsplash.com/photo-1596568065986-c5a52e0ebb64?w=400&h=400&fit=crop",
        price: 22.99,
        originalPrice: 44.99,
        badge: "Sport",
        category: "toys"
    },
    // ===== TEDDY BEARS (10 products) =====
    {
        id: 153,
        name: "Giant Teddy Bear Plush 4ft Soft Cuddly Love Gift",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
        price: 49.99,
        originalPrice: 99.99,
        badge: "Giant",
        category: "teddybears"
    },
    {
        id: 154,
        name: "Heart Teddy Bear Valentine Red Plush Romantic Gift",
        image: "https://images.unsplash.com/photo-1562040506-a9b32cb51b94?w=400&h=400&fit=crop",
        price: 19.99,
        originalPrice: 39.99,
        badge: "❤️ Love",
        category: "teddybears"
    },
    {
        id: 155,
        name: "Pink Teddy Bear Cute Baby Shower Gift Soft Plush",
        image: "https://images.unsplash.com/photo-1585155770913-5bfa40542773?w=400&h=400&fit=crop",
        price: 14.99,
        originalPrice: 29.99,
        badge: "Baby",
        category: "teddybears"
    },
    {
        id: 156,
        name: "Brown Classic Teddy Bear Traditional Stuffed Animal",
        image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=400&h=400&fit=crop",
        price: 16.99,
        originalPrice: 32.99,
        badge: "Classic",
        category: "teddybears"
    },
    {
        id: 157,
        name: "Musical Teddy Bear Plays Lullaby Baby Sleep Toy",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=400&fit=crop",
        price: 24.99,
        originalPrice: 49.99,
        badge: "Musical",
        category: "teddybears"
    },
    {
        id: 158,
        name: "Couple Teddy Bears Pair Love Heart Anniversary Gift",
        image: "https://images.unsplash.com/photo-1560523160-754a9e25c68f?w=400&h=400&fit=crop",
        price: 29.99,
        originalPrice: 59.99,
        badge: "Pair",
        category: "teddybears"
    },
    {
        id: 159,
        name: "White Polar Bear Plush Soft Fluffy Arctic Animal",
        image: "https://images.unsplash.com/photo-1585155770913-5bfa40542773?w=400&h=400&fit=crop",
        price: 18.99,
        originalPrice: 36.99,
        badge: "Fluffy",
        category: "teddybears"
    },
    {
        id: 160,
        name: "Personalized Teddy Bear Custom Name Embroidered",
        image: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=400&h=400&fit=crop",
        price: 27.99,
        originalPrice: 54.99,
        badge: "Custom",
        category: "teddybears"
    },
    {
        id: 161,
        name: "Rainbow Teddy Bear Colorful Pride Plush Soft Toy",
        image: "https://images.unsplash.com/photo-1563396983906-b3795482a59a?w=400&h=400&fit=crop",
        price: 21.99,
        originalPrice: 42.99,
        badge: "Rainbow",
        category: "teddybears"
    },
    {
        id: 162,
        name: "Mini Teddy Bear Keychain Cute Small Plush Accessory",
        image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=400&h=400&fit=crop",
        price: 5.99,
        originalPrice: 11.99,
        badge: "Mini",
        category: "teddybears"
    },
    // ===== KIDS CLOTHES (10 products) =====
    {
        id: 163,
        name: "Kids T-Shirt Set Cotton Cartoon Print Boys Girls 3pcs",
        image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=400&fit=crop",
        price: 16.99,
        originalPrice: 32.99,
        badge: "3pcs",
        category: "kidsclothes"
    },
    {
        id: 164,
        name: "Girls Dress Princess Party Tutu Flower Birthday",
        image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=400&fit=crop",
        price: 24.99,
        originalPrice: 49.99,
        badge: "Princess",
        category: "kidsclothes"
    },
    {
        id: 165,
        name: "Boys Jacket Casual Denim Jean Kids Fashion Outerwear",
        image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=400&fit=crop",
        price: 29.99,
        originalPrice: 54.99,
        badge: "Hot",
        category: "kidsclothes"
    },
    {
        id: 166,
        name: "Kids Pajama Set Soft Cotton Sleepwear Boys Girls",
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=400&fit=crop",
        price: 14.99,
        originalPrice: 28.99,
        badge: "Soft",
        category: "kidsclothes"
    },
    {
        id: 167,
        name: "Girls Leggings Colorful Pattern Stretchy Comfortable",
        image: "https://images.unsplash.com/photo-1476234251651-f353703a034d?w=400&h=400&fit=crop",
        price: 9.99,
        originalPrice: 19.99,
        badge: "Sale",
        category: "kidsclothes"
    },
    {
        id: 168,
        name: "Boys Shorts Summer Cotton Casual Beach Kids",
        image: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=400&h=400&fit=crop",
        price: 11.99,
        originalPrice: 22.99,
        badge: "Summer",
        category: "kidsclothes"
    },
    {
        id: 169,
        name: "Kids Hoodie Fleece Warm Winter Cartoon Print Cute",
        image: "https://images.unsplash.com/photo-1560264280-88b68371db39?w=400&h=400&fit=crop",
        price: 22.99,
        originalPrice: 44.99,
        badge: "Warm",
        category: "kidsclothes"
    },
    {
        id: 170,
        name: "Girls Skirt Pleated School Uniform Cute Fashion",
        image: "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?w=400&h=400&fit=crop",
        price: 12.99,
        originalPrice: 24.99,
        badge: "School",
        category: "kidsclothes"
    },
    {
        id: 171,
        name: "Kids Tracksuit Set Sports Jogger Boys Girls Active",
        image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=400&fit=crop",
        price: 26.99,
        originalPrice: 52.99,
        badge: "Sport",
        category: "kidsclothes"
    },
    {
        id: 172,
        name: "Raincoat Kids Waterproof Cute Animal Hooded Poncho",
        image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?w=400&h=400&fit=crop",
        price: 18.99,
        originalPrice: 36.99,
        badge: "Rain",
        category: "kidsclothes"
    },
    // ===== KIDS ESSENTIALS (10 products) =====
    {
        id: 173,
        name: "Kids Shampoo Gentle Tear-Free Formula Natural 500ml",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
        price: 8.99,
        originalPrice: 16.99,
        badge: "Gentle",
        category: "kidsessentials"
    },
    {
        id: 174,
        name: "Kids Conditioner Detangling Soft Hair Care Natural",
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
        price: 9.99,
        originalPrice: 18.99,
        badge: "Soft",
        category: "kidsessentials"
    },
    {
        id: 175,
        name: "Baby Body Lotion Moisturizing Gentle Skin Care",
        image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
        price: 7.99,
        originalPrice: 14.99,
        badge: "Baby",
        category: "kidsessentials"
    },
    {
        id: 176,
        name: "Kids Towel Set Hooded Animal Cute Bath Cotton",
        image: "https://images.unsplash.com/photo-1583845112203-29329902332e?w=400&h=400&fit=crop",
        price: 14.99,
        originalPrice: 28.99,
        badge: "Cute",
        category: "kidsessentials"
    },
    {
        id: 177,
        name: "Baby Wipes Sensitive Skin Alcohol Free 100 Count",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=400&fit=crop",
        price: 5.99,
        originalPrice: 11.99,
        badge: "100pcs",
        category: "kidsessentials"
    },
    {
        id: 178,
        name: "Kids Toothbrush Set Soft Bristle Fun Cartoon 4 Pack",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop",
        price: 6.99,
        originalPrice: 12.99,
        badge: "4pcs",
        category: "kidsessentials"
    },
    {
        id: 179,
        name: "Baby Sunscreen SPF50 Gentle Skin Protection Lotion",
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
        price: 11.99,
        originalPrice: 22.99,
        badge: "SPF50",
        category: "kidsessentials"
    },
    {
        id: 180,
        name: "Kids Bath Toys Set Floating Animals Fun Playtime",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=400&fit=crop",
        price: 9.99,
        originalPrice: 19.99,
        badge: "Fun",
        category: "kidsessentials"
    },
    {
        id: 181,
        name: "Baby Diaper Bag Organizer Insert Portable Storage",
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=400&fit=crop",
        price: 12.99,
        originalPrice: 24.99,
        badge: "Storage",
        category: "kidsessentials"
    },
    {
        id: 182,
        name: "Kids Nail Clipper Set Safe Baby Grooming Kit",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
        price: 8.99,
        originalPrice: 16.99,
        badge: "Safe",
        category: "kidsessentials"
    },
    // ===== BABY PRODUCTS (20 products) =====
    {
        id: 183,
        name: "Baby Stroller Lightweight Foldable Travel Pushchair",
        image: "https://images.unsplash.com/photo-1591086578504-4c0eefedc3c4?w=400&h=400&fit=crop",
        price: 89.99,
        originalPrice: 179.99,
        badge: "Hot",
        category: "baby"
    },
    {
        id: 184,
        name: "Premium Stroller 3-in-1 Car Seat Combo Travel System",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
        price: 199.99,
        originalPrice: 399.99,
        badge: "Premium",
        category: "baby"
    },
    {
        id: 185,
        name: "Baby Diaper Bag Backpack Large Capacity Waterproof",
        image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&h=400&fit=crop",
        price: 29.99,
        originalPrice: 59.99,
        badge: "Hot",
        category: "baby"
    },
    {
        id: 186,
        name: "Mom Bag Stylish Baby Essentials Organizer Tote",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        price: 24.99,
        originalPrice: 49.99,
        badge: "Stylish",
        category: "baby"
    },
    {
        id: 187,
        name: "Baby Romper Onesie Cotton Cute Print Newborn 3pcs",
        image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&h=400&fit=crop",
        price: 18.99,
        originalPrice: 36.99,
        badge: "3pcs",
        category: "baby"
    },
    {
        id: 188,
        name: "Ruffle Romper Baby Girl Summer Cute Outfit Set",
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=400&fit=crop",
        price: 14.99,
        originalPrice: 28.99,
        badge: "Ruffle",
        category: "baby"
    },
    {
        id: 189,
        name: "Baby Feeding Bottle Set Anti-Colic BPA Free 4 Pack",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=400&fit=crop",
        price: 19.99,
        originalPrice: 38.99,
        badge: "4pcs",
        category: "baby"
    },
    {
        id: 190,
        name: "Baby Bottle Warmer Electric Quick Heating Sterilizer",
        image: "https://images.unsplash.com/photo-1556228841-a3c527ebefe5?w=400&h=400&fit=crop",
        price: 34.99,
        originalPrice: 69.99,
        badge: "Electric",
        category: "baby"
    },
    {
        id: 191,
        name: "Baby High Chair Portable Foldable Feeding Seat",
        image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=400&fit=crop",
        price: 49.99,
        originalPrice: 99.99,
        badge: "Hot",
        category: "baby"
    },
    {
        id: 192,
        name: "Baby Bibs Waterproof Silicone Easy Clean Set 5pcs",
        image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop",
        price: 11.99,
        originalPrice: 22.99,
        badge: "5pcs",
        category: "baby"
    },
    {
        id: 193,
        name: "Baby Bottle Brush Set Cleaning Kit Nipple Brush",
        image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=400&fit=crop",
        price: 7.99,
        originalPrice: 14.99,
        badge: "Set",
        category: "baby"
    },
    {
        id: 194,
        name: "Baby Sippy Cup Spill Proof Trainer Cup Toddler",
        image: "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=400&h=400&fit=crop",
        price: 8.99,
        originalPrice: 16.99,
        badge: "Spill Proof",
        category: "baby"
    },
    {
        id: 195,
        name: "Baby Blanket Soft Plush Swaddle Wrap Newborn Cozy",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=400&fit=crop",
        price: 16.99,
        originalPrice: 32.99,
        badge: "Soft",
        category: "baby"
    },
    {
        id: 196,
        name: "Baby Bouncer Seat Vibrating Soothing Rocker Chair",
        image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=400&fit=crop",
        price: 44.99,
        originalPrice: 89.99,
        badge: "Bouncer",
        category: "baby"
    },
    {
        id: 197,
        name: "Baby Walker Push Toy Learning to Walk Activity",
        image: "https://images.unsplash.com/photo-1596568065986-c5a52e0ebb64?w=400&h=400&fit=crop",
        price: 39.99,
        originalPrice: 79.99,
        badge: "Hot",
        category: "baby"
    },
    {
        id: 198,
        name: "Baby Monitor Video Camera WiFi HD Night Vision",
        image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=400&fit=crop",
        price: 54.99,
        originalPrice: 109.99,
        badge: "Smart",
        category: "baby"
    },
    {
        id: 199,
        name: "Baby Carrier Ergonomic Front Back Hip Seat 4-in-1",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb027a04?w=400&h=400&fit=crop",
        price: 32.99,
        originalPrice: 64.99,
        badge: "Ergonomic",
        category: "baby"
    },
    {
        id: 200,
        name: "Baby Food Maker Steamer Blender All-in-One Processor",
        image: "https://images.unsplash.com/photo-1556228841-a3c527ebefe5?w=400&h=400&fit=crop",
        price: 59.99,
        originalPrice: 119.99,
        badge: "All-in-1",
        category: "baby"
    },
    {
        id: 201,
        name: "Baby Crib Mobile Musical Rotating Toy Nursery Decor",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=400&fit=crop",
        price: 22.99,
        originalPrice: 44.99,
        badge: "Musical",
        category: "baby"
    },
    {
        id: 202,
        name: "Baby Safety Gate Pressure Mount Pet Child Barrier",
        image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=400&fit=crop",
        price: 36.99,
        originalPrice: 72.99,
        badge: "Safety",
        category: "baby"
    }
];


// ===== CART =====
let cart = JSON.parse(localStorage.getItem('temu-cart')) || [];

function updateCartBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    badges.forEach(badge => {
        badge.textContent = totalItems;
    });
}

function saveCart() {
    localStorage.setItem('temu-cart', JSON.stringify(cart));
    updateCartBadge();
}

function addToCartById(productId, quantity = 1, redirectToCheckout = true) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            originalPrice: product.originalPrice,
            image: product.image,
            quantity: quantity
        });
    }

    saveCart();
    showNotification('Item added to cart!');

    // Redirect to checkout page after a short delay
    if (redirectToCheckout) {
        setTimeout(() => {
            window.location.href = 'checkout.html';
        }, 1000);
    }
}

function showNotification(message) {
    const notification = document.getElementById('cart-notification');
    if (notification) {
        notification.querySelector('span').textContent = message;
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
}

// ===== PRODUCTS GRID =====
function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    // Filter out Valentine's Day products for main page - show only regular products
    const regularProducts = products.filter(product => product.category !== 'valentine');

    grid.innerHTML = regularProducts.map(product => `
        <div class="product-card" onclick="viewProduct(${product.id})">
            <div class="image-container">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <span class="product-badge">${product.badge}</span>
                <button class="product-wishlist" onclick="event.stopPropagation(); toggleWishlistItem(${product.id})">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="product-info-card">
                <p class="product-title">${product.name}</p>
                <div class="product-price-row">
                    <div class="price-info">
                        <span class="current-price">$${product.price.toFixed(2)}</span>
                        <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                    </div>
                    <button class="add-cart-btn" onclick="event.stopPropagation(); addToCartById(${product.id}, 1, true)">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== NAVIGATION =====
function viewProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

// ===== SCROLL TO PRODUCTS =====
function scrollToProducts() {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===== SEARCH FUNCTIONALITY =====
function performSearch() {
    const searchInput = document.getElementById('search-input');
    const query = searchInput?.value.trim();

    if (query) {
        window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    }
}

function searchProducts(query) {
    const grid = document.getElementById('search-results-grid');
    const noResults = document.getElementById('no-results');
    const resultsCount = document.getElementById('results-count');

    if (!grid) return;

    // Filter products based on query
    const queryLower = query.toLowerCase();
    let filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(queryLower) ||
        product.category.toLowerCase().includes(queryLower) ||
        product.badge.toLowerCase().includes(queryLower)
    );

    // Update results count
    if (resultsCount) {
        resultsCount.textContent = `${filteredProducts.length} products found`;
    }

    // Show/hide no results message
    if (filteredProducts.length === 0) {
        grid.style.display = 'none';
        if (noResults) noResults.style.display = 'block';
        return;
    } else {
        grid.style.display = 'grid';
        if (noResults) noResults.style.display = 'none';
    }

    // Render filtered products
    grid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" onclick="viewProduct(${product.id})">
            <div class="image-container">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <span class="product-badge">${product.badge}</span>
                <button class="product-wishlist" onclick="event.stopPropagation(); toggleWishlistItem(${product.id})">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="product-info-card">
                <p class="product-title">${product.name}</p>
                <div class="product-price-row">
                    <div class="price-info">
                        <span class="current-price">$${product.price.toFixed(2)}</span>
                        <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                    </div>
                    <button class="add-cart-btn" onclick="event.stopPropagation(); addToCartById(${product.id}, 1, true)">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function sortResults() {
    const select = document.getElementById('sort-select');
    const params = new URLSearchParams(window.location.search);
    const query = params.get('q') || '';

    // Re-search with sorting applied
    searchProducts(query);
}

function filterResults() {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('q') || '';
    searchProducts(query);
}

// ===== PRODUCT PAGE FUNCTIONS =====
function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id')) || 1;
}

function loadProductDetails() {
    const productId = getProductIdFromUrl();
    const product = products.find(p => p.id === productId) || products[0];

    // Update main image
    const mainImage = document.getElementById('main-product-image');
    if (mainImage) {
        mainImage.src = product.image;
        mainImage.alt = product.name;
    }

    // Update title
    const title = document.getElementById('product-title');
    if (title) title.textContent = product.name;

    // Update breadcrumb
    const breadcrumb = document.getElementById('breadcrumb-product');
    if (breadcrumb) breadcrumb.textContent = product.name.substring(0, 30) + '...';

    // Update pricing
    const currentPrice = document.getElementById('current-price');
    const originalPrice = document.getElementById('original-price');
    const discountBadge = document.getElementById('discount-badge');

    if (currentPrice) currentPrice.textContent = `$${product.price.toFixed(2)}`;
    if (originalPrice) originalPrice.textContent = `$${product.originalPrice.toFixed(2)}`;

    const discount = Math.round((1 - product.price / product.originalPrice) * 100);
    if (discountBadge) discountBadge.textContent = `-${discount}%`;

    // Update description
    const desc = document.getElementById('product-desc');
    if (desc) {
        desc.textContent = `Experience the amazing quality of ${product.name}. This product is designed to exceed your expectations with premium materials and exceptional craftsmanship. Perfect for those who appreciate both style and functionality.`;
    }

    // Generate thumbnails
    const thumbnailContainer = document.getElementById('thumbnail-images');
    if (thumbnailContainer) {
        thumbnailContainer.innerHTML = `
            <img src="${product.image}" alt="Thumbnail 1" class="active" onclick="changeMainImage(this)">
            <img src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=100&h=100&fit=crop" alt="Thumbnail 2" onclick="changeMainImage(this)">
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop" alt="Thumbnail 3" onclick="changeMainImage(this)">
            <img src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=100&h=100&fit=crop" alt="Thumbnail 4" onclick="changeMainImage(this)">
        `;
    }

    // Store current product for cart functions
    window.currentProduct = product;
}

function changeMainImage(thumbnail) {
    const mainImage = document.getElementById('main-product-image');
    if (mainImage) {
        mainImage.src = thumbnail.src.replace('w=100&h=100', 'w=800&h=800');
    }

    // Update active state
    document.querySelectorAll('.thumbnail-images img').forEach(img => img.classList.remove('active'));
    thumbnail.classList.add('active');
}

function loadRelatedProducts() {
    const currentId = getProductIdFromUrl();
    const related = products.filter(p => p.id !== currentId).slice(0, 5);

    const grid = document.getElementById('related-products');
    if (!grid) return;

    grid.innerHTML = related.map(product => `
        <div class="product-card" onclick="viewProduct(${product.id})">
            <div class="image-container">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <span class="product-badge">${product.badge}</span>
            </div>
            <div class="product-info-card">
                <p class="product-title">${product.name}</p>
                <div class="product-price-row">
                    <div class="price-info">
                        <span class="current-price">$${product.price.toFixed(2)}</span>
                        <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== QUANTITY CONTROLS =====
function changeQty(delta) {
    const input = document.getElementById('quantity');
    if (!input) return;

    let value = parseInt(input.value) + delta;
    value = Math.max(1, Math.min(99, value));
    input.value = value;
}

// ===== ADD TO CART (PRODUCT PAGE) =====
function addToCart() {
    const quantity = parseInt(document.getElementById('quantity')?.value || 1);
    const product = window.currentProduct;

    if (product) {
        addToCartById(product.id, quantity, true);
    }
}

function buyNow() {
    const quantity = parseInt(document.getElementById('quantity')?.value || 1);
    const product = window.currentProduct;

    if (product) {
        addToCartById(product.id, quantity, false);
        showNotification('Redirecting to checkout...');
        setTimeout(() => {
            window.location.href = 'checkout.html';
        }, 500);
    }
}

// ===== WISHLIST =====
let wishlist = JSON.parse(localStorage.getItem('temu-wishlist')) || [];

function toggleWishlist() {
    const btn = document.querySelector('.wishlist-btn');
    const product = window.currentProduct;

    if (!product) return;

    const index = wishlist.indexOf(product.id);
    if (index === -1) {
        wishlist.push(product.id);
        btn?.classList.add('active');
        btn?.querySelector('i')?.classList.replace('far', 'fas');
        showNotification('Added to wishlist!');
    } else {
        wishlist.splice(index, 1);
        btn?.classList.remove('active');
        btn?.querySelector('i')?.classList.replace('fas', 'far');
        showNotification('Removed from wishlist');
    }

    localStorage.setItem('temu-wishlist', JSON.stringify(wishlist));
}

function toggleWishlistItem(productId) {
    const index = wishlist.indexOf(productId);
    if (index === -1) {
        wishlist.push(productId);
        showNotification('Added to wishlist!');
    } else {
        wishlist.splice(index, 1);
        showNotification('Removed from wishlist');
    }
    localStorage.setItem('temu-wishlist', JSON.stringify(wishlist));
}

// ===== TABS =====
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;

            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(tabId)?.classList.add('active');
        });
    });
}

// ===== COLOR OPTIONS =====
function initColorOptions() {
    const colorBtns = document.querySelectorAll('.color-btn');
    colorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            colorBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

// ===== BONUS COUPONS =====
function showCoupons() {
    alert('🎉 Congratulations!\n\nYou\'ve unlocked these special coupons:\n\n• 15% OFF - Code: LOVE15\n• $5 OFF orders $30+ - Code: SAVE5\n• Free Shipping - Code: FREESHIP\n\nHappy shopping! 💕');
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', function () {
    // Render products grid (main page)
    renderProducts();

    // Update cart badge on load
    updateCartBadge();

    // Add smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Search functionality - add enter key listener
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
});

// ===== CHECKOUT PAGE FUNCTIONS =====
function loadCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const cartItemCount = document.getElementById('cart-item-count');

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.style.display = 'none';
        if (emptyCart) emptyCart.style.display = 'block';
        if (cartItemCount) cartItemCount.textContent = '(0 items)';
        return;
    }

    cartItemsContainer.style.display = 'block';
    if (emptyCart) emptyCart.style.display = 'none';

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartItemCount) cartItemCount.textContent = `(${totalItems} items)`;

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="item-details">
                <h3 class="item-name">${item.name}</h3>
                <div class="item-price">
                    <span class="price">$${item.price.toFixed(2)}</span>
                    ${item.originalPrice ? `<span class="original">$${item.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <div class="item-quantity">
                    <button class="qty-btn" onclick="updateCartItemQty(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateCartItemQty(${item.id}, 1)">+</button>
                </div>
            </div>
            <div class="item-total">
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function updateCartItemQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;

    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    saveCart();
    loadCartItems();
    updateOrderSummary();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    loadCartItems();
    updateOrderSummary();
    showNotification('Item removed from cart');
}

function updateOrderSummary() {
    const subtotalEl = document.getElementById('subtotal');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');
    const savingsBanner = document.getElementById('savings-banner');
    const savingsAmount = document.getElementById('savings-amount');
    const checkoutBtn = document.getElementById('checkout-btn');

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const originalTotal = cart.reduce((sum, item) => sum + ((item.originalPrice || item.price) * item.quantity), 0);
    const savings = originalTotal - subtotal;
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + tax;

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;

    if (savingsBanner && savingsAmount) {
        if (savings > 0) {
            savingsBanner.style.display = 'flex';
            savingsAmount.textContent = `$${savings.toFixed(2)}`;
        } else {
            savingsBanner.style.display = 'none';
        }
    }

    if (checkoutBtn) {
        checkoutBtn.disabled = cart.length === 0;
    }
}

let appliedPromo = null;

function applyPromoCode() {
    const promoInput = document.getElementById('promo-code');
    const promoResult = document.getElementById('promo-result');
    const discountRow = document.getElementById('discount-row');
    const discountAmount = document.getElementById('discount-amount');

    const code = promoInput?.value.trim().toUpperCase();

    const promoCodes = {
        'LOVE15': { type: 'percent', value: 15 },
        'SAVE5': { type: 'fixed', value: 5, minOrder: 30 },
        'FREESHIP': { type: 'freeship', value: 0 }
    };

    if (promoCodes[code]) {
        appliedPromo = promoCodes[code];
        if (promoResult) {
            promoResult.innerHTML = `<i class="fas fa-check-circle"></i> Promo code "${code}" applied!`;
            promoResult.className = 'promo-result success';
        }

        // Update totals with discount
        updateOrderSummary();

        if (discountRow && discountAmount && appliedPromo.type !== 'freeship') {
            discountRow.style.display = 'flex';
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            let discount = 0;

            if (appliedPromo.type === 'percent') {
                discount = subtotal * (appliedPromo.value / 100);
            } else if (appliedPromo.type === 'fixed') {
                discount = appliedPromo.value;
            }

            discountAmount.textContent = `-$${discount.toFixed(2)}`;
        }

        showNotification('Promo code applied!');
    } else {
        appliedPromo = null;
        if (promoResult) {
            promoResult.innerHTML = `<i class="fas fa-times-circle"></i> Invalid promo code`;
            promoResult.className = 'promo-result error';
        }
        if (discountRow) discountRow.style.display = 'none';
    }
}

function proceedToPayment() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }

    // Show success modal
    const modal = document.getElementById('success-modal');
    const orderNumber = document.getElementById('order-number');

    if (modal) {
        modal.classList.add('show');
        if (orderNumber) {
            const randomNum = Math.floor(Math.random() * 900000) + 100000;
            orderNumber.textContent = `TM-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}${String(new Date().getDate()).padStart(2, '0')}${randomNum}`;
        }

        // Clear cart after successful order
        cart = [];
        saveCart();
    }
}

// ===== CATEGORIES DROPDOWN =====
function toggleCategories(event) {
    event.preventDefault();
    const dropdown = document.querySelector('.categories-dropdown');
    if (dropdown) {
        dropdown.classList.toggle('open');
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
    const dropdown = document.querySelector('.categories-dropdown');
    if (dropdown && !dropdown.contains(event.target)) {
        dropdown.classList.remove('open');
    }
});

// Close dropdown when pressing Escape
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        const dropdown = document.querySelector('.categories-dropdown');
        if (dropdown) {
            dropdown.classList.remove('open');
        }
    }
});
