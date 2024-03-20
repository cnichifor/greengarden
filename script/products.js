var allproducts = [
    {
        type: 'gt',
        file: '../img/products/Pocket Snips.webp',
        name: 'Pocket Snips',
        price: '17.99',
        lprice: '',
        colors: ['#79ff54', '#ff3030'],
        scolor: '#79ff54',
        description: 'Pocket Snips is a compact and versatile gardening tool with sharp, stainless steel blades that can cut through branches and stems up to 5/8 inch thick. Its small size and soft rubber grip make it easy to handle, while the safety lock ensures safe storage.'
    },
    {
        type: 'gt',
        file: '../img/products/Garden Clean-up Cart with Tubtrug.webp',
        name: 'Garden Clean-up Cart',
        price: '69.99',
        lprice: '80.00',
        colors: [],
        scolor: '',
        description: 'The Garden Clean-up Cart is the ultimate companion for efficient garden maintenance. This versatile cart features a spacious design with multiple compartments and storage pockets, allowing you to easily transport and organize your gardening tools, debris, and supplies. With its sturdy construction and durable wheels, it effortlessly glides over various terrains, making clean-up tasks a breeze. Say goodbye to scattered tools and messy gardens with the Garden Clean-up Cart, your trusted ally for a tidy and well-organized outdoor space.'
    },
    {
        type: 'gt',
        file: '../img/products/Mobile Tool Storage Caddy.webp',
        name: 'Mobile Tool Storage Caddy',
        price: '129.99',
        lprice: '200.00',
        colors: [],
        scolor: '',
        description: "The Mobile Tool Storage Caddy is a must-have for any DIY enthusiast or professional gardener. This compact and convenient caddy is designed to keep your essential tools organized and easily accessible while on the go. With its sturdy wheels and ergonomic handle, you can effortlessly transport your tools from one task to another without the hassle of carrying heavy loads. The caddy features multiple compartments and trays, providing ample space for tools of various sizes and types. Whether you're working in the garden or tackling home improvement projects, the Mobile Tool Storage Caddy ensures your tools are always within reach, saving you time and effort."
    },
    {
        type: 'gt',
        file: '../img/products/Colorful Tubtrug.webp',
        name: 'Colorful Tubtrug',
        price: '34.99',
        lprice: 0,
        colors: ['#5752ff', '#d952ff', '#ff1c37'],
        scolor: '#5752ff',
        description: "Add a pop of color and functionality to your gardening routine with the Colorful Tubtrug. This vibrant and versatile tub is perfect for a variety of outdoor tasks. Made from durable and flexible materials, it can withstand heavy use and is resistant to cracks and breaks. Use it to carry and store garden tools, collect weeds or debris, mix soil or compost, or even as a decorative planter. Its comfortable handles make it easy to transport, while its spacious design offers ample capacity for your gardening needs. Available in a range of eye-catching colors, the Colorful Tubtrug is not only practical but also adds a touch of style to your outdoor space."
    },
    {
        type: 'fc',
        file: '../img/products/BugBaffler Adult Hooded Shirt.webp',
        name: 'BugBaffler® Adult Hooded Shirt',
        price: '38.99',
        lprice: 0,
        colors: [],
        scolor: '',
        description: "The BugBaffler® Adult Hooded Shirt is your ultimate defense against pesky insects during outdoor activities. This innovative shirt features a built-in hood that provides complete head and neck protection from biting bugs, allowing you to enjoy your time outdoors without the annoyance of bug bites. The lightweight and breathable fabric keeps you comfortable while effectively keeping insects at bay. With its relaxed fit and adjustable cuffs, it ensures a comfortable and secure fit for all-day wear. Whether you're gardening, camping, hiking, or simply relaxing in your backyard, the BugBaffler® Adult Hooded Shirt is a reliable and stylish solution to keep bugs away and make your outdoor experience more enjoyable."
    },
    {
        type: 'fc',
        file: '../img/products/Womens Joules Short Sneaker Wellies.jpg',
        name: 'Women’s Joules Short Sneaker Wellies',
        price: '52.46',
        lprice: '60.00',
        colors: ['#1c3aff'],
        scolor: '#1c3aff',
        description: "Stay stylish and dry with the Women's Joules Short Sneaker Wellies. These fashionable rain boots combine the classic wellington design with a modern sneaker-inspired twist. Crafted with waterproof rubber, they keep your feet protected from wet conditions while offering a comfortable fit. The shorter height adds a trendy touch, making them versatile for both rainy days and everyday wear. With their durable outsole and reliable traction, you can confidently stride through puddles and muddy terrains. Whether you're walking the dog, running errands, or attending outdoor events, the Women's Joules Short Sneaker Wellies ensure you stay both fashion-forward and puddle-proof."
    },

    {
        type: 'fc',
        file: '../img/products/Nitrile Gloves.webp',
        name: 'Nitrile Gloves',
        price: '7.99',
        lprice: 0,
        colors: ['#000000', '#45ff5e', '#e77dff'],
        scolor: '#000000',
        description: "Nitrile Gloves are a reliable choice for various tasks that require hand protection. These gloves are made from a synthetic material called nitrile, which offers excellent resistance to chemicals, oils, and punctures. They provide a barrier against contaminants and are commonly used in medical, laboratory, and industrial settings. Nitrile Gloves are latex-free, making them a suitable option for individuals with latex allergies or sensitivities. They offer a snug and comfortable fit, allowing for dexterity and tactile sensitivity. Whether you're working in healthcare, handling chemicals, or engaging in general household tasks, Nitrile Gloves provide reliable protection and peace of mind."
    },
    {
        type: 'fc',
        file: '../img/products/Unisex Garden Clogs.webp',
        name: 'Unisex Garden Clogs',
        price: '54.99',
        lprice: 0,
        colors: ['#000000', '#2424ff', '#303030', '#ff2e77'],
        scolor: '#000000',
        description: "Step into comfort and practicality with these Unisex Garden Clogs. Designed for both men and women, these versatile clogs are perfect for all your gardening needs. They feature a slip-on style with a sturdy construction and a textured outsole for excellent traction. The waterproof material ensures your feet stay dry while working in wet conditions, and the easy-to-clean design makes them a breeze to maintain. With their lightweight and breathable design, these Unisex Garden Clogs provide all-day comfort, allowing you to tend to your garden with ease."
    },
    {
        type: 'fc',
        file: '../img/products/Rose Gloves.webp',
        name: 'Rose Gloves',
        price: '49.99',
        lprice: 0,
        colors: [],
        scolor: '',
        description: "Protect your hands and embrace your love for roses with these Rose Gloves. Specifically designed for rose gardening, these gloves offer superior hand and forearm protection. They are made with durable materials and feature reinforced fingertips and padded palms to shield against thorns and prickles. The gloves provide a snug fit and flexibility, allowing you to handle your roses with precision and care. With their stylish and functional design, these Rose Gloves are a must-have for any rose enthusiast, ensuring you can tend to your beautiful blooms without any discomfort or scratches."
    },

    {
        type: 'fc',
        file: '../img/products/Womanswork Arm Saver Gloves.webp',
        name: 'Womanswork Arm Saver Gloves',
        price: '32.99',
        lprice: 0,
        colors: ['#ffffff'],
        scolor: '#ffffff',
        description: "Take the strain out of gardening with Womanswork Arm Saver Gloves. These innovative gloves are designed with extended cuffs that provide extra protection for your forearms while working. Made with high-quality materials, they offer durability and flexibility, allowing you to comfortably tackle various gardening tasks. The gloves feature reinforced fingertips and padded palms for added grip and protection. Whether you're pruning, digging, or handling thorny plants, Womanswork Arm Saver Gloves keep your arms and hands shielded from scratches, cuts, and dirt, making gardening a more enjoyable and worry-free experience."
    },

    {
        type: 'fc',
        file: '../img/products/The Vermonter by Vermont Glove.webp',
        name: 'The Vermonter by Vermont Glove',
        price: '99.99',
        lprice: 0,
        colors: [],
        scolor: '',
        description: "Experience exceptional craftsmanship and durability with The Vermonter by Vermont Glove. These gloves are expertly handmade in Vermont, USA, using high-quality materials and traditional techniques. Designed to withstand the rigors of outdoor work, they offer superior protection and comfort. The gloves feature a rugged construction, reinforced palms, and double-stitched seams, ensuring long-lasting performance. With their versatile design, The Vermonter gloves are suitable for various outdoor activities, including gardening, farming, and general labor. Choose quality and reliability with The Vermonter by Vermont Glove, your trusted companion for demanding tasks in any season."
    },

    {
        type: 'fc',
        file: '../img/products/Womanswork Raffia Hat.webp',
        name: 'Womanswork Raffia Hat',
        price: '46.99',
        lprice: 0,
        colors: [],
        scolor: '',
        description: "Shield yourself from the sun in style with the Womanswork Raffia Hat. This fashionable and functional hat is designed specifically for women, offering both sun protection and a touch of elegance. Made from high-quality raffia, it provides excellent breathability and lightweight comfort. The wide brim helps to keep the sun's rays at bay, protecting your face and neck from harmful UV radiation. Whether you're gardening, enjoying outdoor activities, or simply lounging by the pool, the Womanswork Raffia Hat is a must-have accessory to stay cool, comfortable, and sun-safe."
    },

    {
        type: 'sf',
        file: '../img/products/Organic Self-Watering Potting Mix, 20 Qts.webp',
        name: 'Organic Self-Watering Potting Mix, 20 Qts.',
        price: '16.99',
        lprice: 0,
        colors: [],
        scolor: '',
        description: "Achieve healthy and thriving plants with the Organic Self-Watering Potting Mix. This high-quality potting mix is formulated with organic ingredients to provide optimal growing conditions for your plants. It features a unique self-watering formula that helps to maintain consistent moisture levels, preventing over or under-watering. The mix is rich in essential nutrients and has excellent drainage properties, promoting strong root development and vibrant growth. Whether you're a seasoned gardener or a beginner, the Organic Self-Watering Potting Mix is a convenient and reliable choice for potted plants, ensuring they receive the proper hydration and nourishment for long-term success."
    },

    {
        type: 'sf',
        file: '../img/products/Potting Mix, 20 Qts..webp',
        name: "Potting Mix, 20 Qts.",
        price: '16.99',
        lprice: '20.00',
        colors: [],
        scolor: '',
        description: "Give your plants the edge with this versatile potting mix that's ideal for all types of planters, from hanging baskets to large pots. A blend of peat and moisture-retaining coir reduces drought stress and helps plants stay hydrated. Weed-free and pH-balanced."
    },

    {
        type: 'sf',
        file: '../img/products/Organic Raised Bed Potting Mix.webp',
        name: "Organic Raised Bed Potting Mix, 20 Quart",
        price: '22.99',
        lprice: '',
        colors: [],
        scolor: '',
        description: 'There are heaps of benefits to gardening in raised beds — less bending and less tending, to name a few — but one of the most compelling, is the control that you have over your soil. We created a potting mix blended specifically for raised beds to help optimize your nutrient input, and maximize your harvest. With a larger percentage of garden-boosting compost, this mix is packed to the brim with stem-strengthening, fruit-fortifying nutrients and minerals to ensure that your raised beds raise healthier crops. It holds moisture for longer, while still allowing healthy drainage, and it’s less prone to compaction, so your roots have free range to roam and find their sweet spot. Take it from the donkey on the bag: this is a "kick-ass" soil mix, rarin’ and ready to supercharge your raised bed growing! Packaged exclusively for GSC and made by our local friends at Vermont Compost Company.'
    },

    {
        type: 'sf',
        file: '../img/products/Raised Bed Booster Compost Mix Kit.webp',
        name: "Raised Bed Booster Compost Mix Kit",
        price: '34.99',
        lprice: '',
        colors: [],
        scolor: '',
        description: "Soil health is directly related to growing success. Because organic matter and nutrient levels get depleted over a season, it's important to feed your soil periodically. By bundling our exclusive Booster Mix (compost plus a bevy of organic nutrients) and an easy-apply shaker of our organic All-Purpose Fertilizer 5-5-5 together, we've simplified the process of feeding your garden. Give your veggies, herbs, and flowers the best possible foundation — and reap the rewards all season long!"
    },

    {
        type: 'sf',
        file: "../img/products/Neptune's Harvest Fish & Seaweed Fertilizer, 1 Quart.webp",
        name: "Neptune's Harvest Fish & Seaweed Fertilizer, 1 Quart",
        price: '24.99',
        lprice: '35.00',
        colors: [],
        scolor: '',
        description: "Plants love seafood too! Fish, seafood, and seaweed contain growth-boosting calcium, magnesium, and a host of minerals that nourish plants. Foliage will be stronger and richer in color, blooms will be more plentiful, fragrant, and longer lasting too. This balanced blend has been shown to increase yield, and improve shelf life of your fruits and veggies. Give it a try and see how your garden responds!"
    },

    {
        type: 'sf',
        file: "../img/products/Gardener's Best® Organic Tomato Fertilizer, 24 Oz..webp",
        name: "Gardener's Best® Organic Tomato Fertilizer, 24 Oz.",
        price: '14.99',
        lprice: '',
        colors: [],
        scolor: '',
        description: "Grow your best tomatoes ever with our organic, 8-5-5 fertilizer fortified with 4-1/2% calcium. Calcium helps prevent blossom end rot, a common tomato disorder. Use the entire 1-1/2-pound bag in your Tomato Success Kit, or apply 4 to 5 tablespoons per plant in your garden."
    },

    {
        type: 'sf',
        file: "../img/products/Coco Coir Potting Mix.webp",
        name: "Coco Coir Potting Mix",
        price: '7.99',
        lprice: '',
        colors: [],
        scolor: '',
        description: "Our exclusive Eco-coir™ is an earth-friendly planting mix derived from coconut husks. It’s perfect to use on its own as a planting mix in pots, planters and window boxes, or as a peat-free alternative when you make your own planting mixes. Unlike other coco coir products, our Eco-coir™ undergoes a special process to remove salts and to balance the pH for optimal plant growth. Coco coir has excellent water-holding capacity, yet drains well — so important for healthy root growth. Our blend is a mix of fine and coarse grinds to provide the perfect environment for plant roots. Carbon-rich coir is also handy for layering with nitrogen-rich kitchen scraps and lawn clippings in the compost pile. It also makes a good bedding material for worm composters. Simply add water and each convenient compressed Eco-coir™ brick expands to 10 quarts of fluffy mix."
    },

    {
        type: 'gt',
        file: '../img/products/Root Slayer® Shovel.webp',
        name: "Root Slayer® Shovel",
        price: '74.99',
        lprice: '',
        colors: [],
        scolor: '',
        description: "Ever hit roots when planting new perennials? Tried digging up old bushes only to be foiled by stubborn roots? Or tried to divide hostas only to have them slip and slide away from you? The Root Slayer® gets you through all these chores with ease! A multi-purpose shovel, it can free up space in your tool shed too — you won't find yourself needing a separate root hatchet or saw anymore. It's also been certified 150% stronger than similar tools by an independent testing laboratory. So go ahead and dig!"
    },

    {
        type: 'gt',
        file: "../img/products/Large Gardener's Supply Cart.webp",
        name: "Large Gardener's Supply Cart",
        price: '499.99',
        lprice: '',
        colors: ['#7a1f06', '#c41a6c', '#1ac43c'],
        scolor: '#7a1f06',
        description: "For over 25 years, our garden carts have been a beloved tool of gardeners everywhere. That’s because they were designed specifically to meet the needs of gardeners, not adapted from an industrial utility cart. This garden cart has big wheels with pneumatic tires that roll easily over rough terrain. High sides prevent loose loads like mulch and compost from bouncing out. The axle is positioned to distribute the weight and balance the load."
    },
    
    {
        type: 'gt',
        file: '../img/products/Colorful Tubtrug, 11 Gallon.webp',
        name: "Colorful Tubtrug, 11 Gallon",
        price: '19.99',
        lprice: '',
        colors: ['#1a5bc4', '#1a5bc4', '#47b346', '#9184f5', '#cf48d9', '#d948c8', '#de1818'],
        scolor: '#1a5bc4',
        description: "These flexible, lightweight polyethylene tubs are washable, bendable, crushable, nearly indestructible. This Tubtrug holds 11 gallons and is plenty big for collecting weeds, gathering long-stemmed flowers for bouquets, carrying hand tools and supplies out to the garden and more. You'll find dozens of uses!"
    },

    {
        type: 'gt',
        file: '../img/products/Poly-Tough Cart a Two-Wheel Wheelbarrow.webp',
        name: "Poly-Tough Cart: a Two-Wheel Wheelbarrow",
        price: '359.99',
        lprice: '',
        colors: ['#1a1717', '#cf2727'],
        scolor: '#1a1717',
        description: 'Thanks to its center-mounted wheels, this rugged wheelbarrow is stable and easy to maneuver, even when hauling loads up to 300 lbs. Its unique design allows the front to tip all the way to the ground while the wheels stay put; that means you can scoop heavy stones or logs into the cart instead of lifting them. The polyethylene "tub" is great for mixing wet soil or cement, will never rust, and rinses clean in a jiffy. Choice of Black or Red.'
    },

    {
        type: 'gt',
        file: '../img/products/Mod Hod.webp',
        name: "Mod Hod",
        price: '29.99',
        lprice: '',
        colors: ['#b8a0a0', '#2e2033', '#3c5cc7'],
        scolor: '#b8a0a0',
        description: "The name says it all! Our exclusive Mod Hod is a modern take on the traditional harvesting hod. Gather and rinse vegetables outdoors — the smooth, perforated interior won't bruise prized produce. The fold-out legs keep your harvest off the ground, allowing it to drip-dry before bringing indoors. Washing vegetables fresh from the garden outdoors keeps the kitchen clean and the chef happy!"
    },

    {
        type: 'gt',
        file: "../img/products/Gardener's Lifetime Trowel.webp",
        name: "Gardener's Lifetime Trowel",
        price: '39.99',
        lprice: '',
        colors: [],
        scolor: '',
        description: "Our Gardener’s Lifetime Trowel is hand-forged in Holland from the finest high-carbon Swedish boron steel. Unlike flimsy tools that are stamped from thin stainless steel, this trowel is ready for a lifetime of use by serious gardeners. "
    },

    {
        type: 'gt',
        file: '../img/products/Bamboo Garden Stool and Basket Combo.webp',
        name: "Bamboo Garden Stool and Basket Combo",
        price: '69.99',
        lprice: '',
        colors: [],
        scolor: '',
        description: "We're in love with this versatile, heirloom-quality, all-in-one basket, stool, and seat. Carry tools and plant starts out to your garden, harvest veggies to bring inside, sit on it to weed and tend or keep potatoes and onions (or bath items, dog toys, and more!) neatly corralled. With so many uses, you'll want more than one!"
    },

    {
        type: 'fc',
        file: '../img/products/Birkenstock® Super Birki Clogs.webp',
        name: "Birkenstock® Super Birki Clogs",
        price: '80.99',
        lprice: '',
        colors: ['#000000'],
        scolor: '#000000',
        description: "If you've ever owned a pair of Birkenstocks, you understand why they have such a loyal following. If you haven't, then this is the perfect shoe to get acquainted with. Quite possibly the most comfortable garden clog on the planet, it won't slow you down or hold you back! Sturdy, supportive, and twist-resistant with a non-skid sole. Goes well from garden to store too!"
    },

    {
        type: 'fc',
        file: '../img/products/BugBaffler® Tick Gaiters, 18.webp',
        name: 'BugBaffler® Tick Gaiters, 18"',
        price: '11.99',
        lprice: '',
        colors: [],
        scolor: '',
        description: 'Pull-on gaiters are made from fine netting, preventing ticks, mosquitoes and other bugs from crawling up or flying inside pant legs, so you can get out in the garden or walk in the woods without worry. Knit cuff; elastic top. Adult size is approx. 18" high including cuff. Made in USA by BugBaffler®, a lead'
    },

    {
        type: 'fc',
        file: "../img/products/Women's Gold Leaf Dry Touch™ Gloves.webp",
        name: "Women's Gold Leaf Dry Touch™ Gloves",
        price: '36.99',
        lprice: '',
        colors: [],
        scolor: '',
        description: "Now, gardeners in the US can enjoy the unmatched durability and legendary comfort of Gold Leaf Gloves. Boasting the highest quality materials and workmanship, Gold Leaf Gloves stand up to tough tasks yet remain soft and pliable. "
    },

    {
        type: 'fc',
        file: "../img/products/Women's Bogs Crandall Adjustable Calf Mid Height Boots.webp",
        name: "Women's Bogs Crandall Adjustable Calf Mid Height Boots",
        price: '114.75',
        lprice: '134.99',
        colors: ['#000000'],
        scolor: '#000000',
        description: "An unassuming boot with all sorts of high tech built in, the Crandall's best feature might just be the adjustable calf. No more squeezing into something made for toothpick calves, or dealing with a boot that chafes because there's too much room in the shaft. Simply adjust the buckle and give yourself the perfect fit!"
    },

    {
        type: 'fc',
        file: "../img/products/Men's Mud® Gauntlet Rose Gloves.webp",
        name: "Men's Mud® Gauntlet Rose Gloves",
        price: '42.99',
        lprice: '',
        colors: [],
        scolor: '',
        description: "Goatskin gloves that stay soft and won't stiffen after getting wet? Yes! These gauntlet gloves protect hands and arms, are comfortable, durable, and have an adjustable wrist strap to keep out dirt and debris."
    },

    {
        type: 'sf',
        file: '../img/products/Energy Buttons, 5 Lbs..webp',
        name: "Energy Buttons, 5 Lbs.",
        price: '14.99',
        lprice: '',
        colors: [],
        scolor: '',
        description: "Give your garden a boost with the powerful nourishment of aged manure without the hassles. Simply sprinkle these fertilizer pellets right from the pail for slow-release energy. Rich in nitrogen, phosphorous, potash and calcium, they're great for vegetable plants and container gardens."
    },

    {
        type: 'sf',
        file: '../img/products/Seed Starting Mix, 9 Qts..webp',
        name: "Seed Starting Mix, 9 Qts.",
        price: '12.99',
        lprice: '',
        colors: [],
        scolor: '',
        description: "Start seeds off right with this finely textured blend. Ideal for use in self-watering and regular seed-starting trays, it offers the perfect balance of drainage and wicking action to keep roots moist."
    },

    {
        type: 'sf',
        file: "../img/products/Gardener's Revolution® Classic Tomato Organic Replenishment Kit.webp",
        name: "Gardener's Revolution® Classic Tomato Organic Replenishment Kit",
        price: '54.99',
        lprice: '',
        colors: [],
        scolor: '',
        description: "Prepare your Gardener's Revolution® Classic Tomato Planter for another season of plentiful harvest with this organic replenishment kit. You'll receive 60 quarts of Organic Self-Watering Potting Mix with SuperRoot Booster. "
    },

    {
        type: 'sf',
        file: '../img/products/Transplant Mix, 20 Qts.webp',
        name: "Transplant Mix, 20 Qts",
        price: '16.99',
        lprice: '',
        colors: [],
        scolor: '',
        description: "Our SuperRoot Booster with MycoActive® Technology creates the living soil mix that plants need to thrive. The secret? Mycorrhizae, amazing microbes that form a partnership with roots to support vigorous and resilient plant growth."
    },

    {
        type: 'sf',
        file: '../img/products/Black Dirt Farm Soil Grade Worm Castings, 20 Quart.webp',
        name: "Black Dirt Farm Soil Grade Worm Castings, 20 Quart",
        price: '54.95',
        lprice: '',
        colors: [],
        scolor: '',
        description: "Our High Potency Worm Castings are a unique soil amendment made by the Red Wiggler worm. Their robust biology boosts plant-available fertility and activates soil life, increasing plant health and resilience, producing stronger plants and higher yields."
    },

    {
        type: 'gt',
        file: '../img/products/Recycled Tubtrug, 20 Gallon.webp',
        name: "Recycled Tubtrug, 20 Gallon",
        price: '27.99',
        lprice: '',
        colors: [],
        scolor: '',
        description: "These flexible, lightweight, 100% recycled polyethylene tubs are washable, bendable, crushable — nearly indestructible. You'll find plenty of uses, from collecting weeds, gathering flowers, carrying hand tools and supplies out to the garden, organizing the trunk of your car or kids' playroom, and so much more. "
    },

    {
        type: 'gt',
        file: "../img/products/Gardener's Lifetime Hand Weed Popper.webp",
        name: "Gardener's Lifetime Hand Weed Popper",
        price: '21.99',
        lprice: '33.00',
        colors: [],
        scolor: '',
        description: "Whether you want to remove unsightly, deep-rooted weeds or harvest the entire dandelion root for tea, this is the tool to do it quickly and with minimum effort. Push the tines into the soil, vertically, close to the plant, press the handle away from the plant and toward the ground, and POP, the entire root comes up. It's that simple! No more broken roots left in the ground."
    },

    {
        type: 'gt',
        file: "../img/products/Gardener's Lifetime Half-Moon Hoe.webp",
        name: "Gardener's Lifetime Half-Moon Hoe",
        price: '79.99',
        lprice: '',
        colors: [],
        scolor: '',
        description: "Also called a swan-neck hoe, this popular tool cuts weeds just below the soil surface. The ergonomic design lets you stand up straight while working, minimizing back strain, and the curved blade lets you work in tight spaces between plants and rows. To give it extra strength and durability, the wooden handle is bolted into the deep socket."
    },

    {
        type: 'gt',
        file: '../img/products/Root Slayer® Nomad Spade and Weeder.webp',
        name: "Root Slayer® Nomad Spade and Weeder",
        price: '44.99',
        lprice: '',
        colors: [],
        scolor: '',
        description: "This is a compact version of the best-selling Root Slayer® Shovel — the head is about 30% smaller — which makes it lighter weight and ideal for small spaces, raised beds, and borders."
    },

    {
        type: 'fc',
        file: '../img/products/Womens Bellingham Performance Goatskin.webp',
        name: "Women's Bellingham Performance Goatskin",
        price: '24.99',
        lprice: '',
        colors: [],
        scolor: '',
        description: "This super durable and attractive glove protects hardworking hands and is ultra comfy too. With extra knuckle protection, an adjustable cuff to keep debris out, padding on the palm, and a breathable spandex back, your hands will be safe from nicks and scrapes. They have a nice close fit, but if your hands are a little damp you can still slide them on easily."
    },

    {
        type: 'fc',
        file: '../img/products/Womens Joules Ankle Height Welly Boots.jpg',
        name: "Women's Joules Ankle Height Welly Boots",
        price: '52.46',
        lprice: '70.00',
        colors: [],
        scolor: '',
        description: "These shorties slip on and off quickly as you buzz around doing your chores: collecting flowers from the garden, zipping out to the mailbox, feeding the chickens, walking the dog, or making a grocery run. Bee-decked 100% rubber upper features an integrated sole so you don't have to worry about any leaks. Aggressive tread also means you're less likely to slip on slick surfaces or get stuck in any mud. Pull tab on the back."
    },

    {
        type: 'fc',
        file: '../img/products/Wondergrip Insulated Waterproof Work Gloves.webp',
        name: "Wondergrip Insulated Waterproof Work Gloves",
        price: '12.99',
        lprice: '',
        colors: [],
        scolor: '',
        description: "Hands stay cozy and dry in these hardworking waterproof gloves. They're double-dipped in flexible latex for strength, durability and comfort. Ridged fingers and palm give you a firm, non-slip grip on tools. Knit cuff helps keep debris out. Not suitable for those with a latex allergy."
    },

    {
        type: 'fc',
        file: '../img/products/Touch Screen Gardening Gloves, Set of 3.webp',
        name: "Touch Screen Gardening Gloves, Set of 3",
        price: '12.99',
        lprice: '',
        colors: [],
        scolor: '',
        description: "A lightweight seamless glove, with a 13-gauge nylon shell that approximates bare-hand sensitivity. The waterproof, poly-dipped palm allows high dexterity and grip. With a snug, comfortable fit, it protects hands while you work and features a stretchy knit cuff to keep dirt, stones, and other debris from getting inside."
    },

    {
        type: 'fc',
        file: '../img/products/Kujo Yardwear Garden Shoe.webp',
        name: "Kujo Yardwear Garden Shoe",
        price: '124.99',
        lprice: '',
        colors: ['#448749', '#000000'],
        scolor: '#448749',
        description: "The lightness of these innovative garden shoes hide their toughness and comfort. Outsole is waterproof to keep your feet dry. Cushioned EVA footbed prevents fatigue; lining is antimicrobial. Mesh upper is water-resistant, allows airflow and provides the flexibility of athletic sneakers."
    },

    {
        type: 'sf',
        file: '../img/products/Espoma Bio-tone Starter Plus Plant Food, 4 lb.webp',
        name: "Espoma Bio-tone Starter Plus Plant Food, 4 lb",
        price: '14.99',
        lprice: '',
        colors: [],
        scolor: '',
        description: "If you have soil that's consistently hard to grow in – this is for you! With both endo and ecto mycorrhizae, this microbe-enhanced plant food nourishes depleted soil for abundant growth. Use in flower beds, to nourish flower bulbs, invigorate lawns, or settle newly planted trees and shrubs. "
    },

    {
        type: 'sf',
        file: '../img/products/Black Dirt Farm Compost Tea Grade Worm Castings.webp',
        name: "Black Dirt Farm Compost Tea Grade Worm Castings",
        price: '12.99',
        lprice: '',
        colors: [],
        scolor: '',
        description: "Our High Potency Worm Castings are a unique soil amendment made by the Red Wiggler worm. Their robust biology boosts plant-available fertility and activates soil life, increasing plant health and resilience, producing stronger plants and higher yields. Worm castings build soil structure, improve aeration, moisture retention, suppress disease, and foster a complex web of microbial life to build vibrant soil. Tea Grade: Optimized for compost tea production, dried and screened to 1/8” to maximize microbial sheering during brewing."
    },

    {
        type: 'sf',
        file: '../img/products/Dr. Earth Pure Gold® All Purpose Plant Food, 16 oz.webp',
        name: "Dr. Earth Pure Gold® All Purpose Plant Food, 16 oz",
        price: '16.99',
        lprice: '',
        colors: [],
        scolor: '',
        description: "No mixing, raking in, or measuring. Simply apply two pumps directly to the soil, water within 24 hours, and your plants will be amply fed for two weeks. Dr. Earth plant food is made from collected, human-grade supermarket and farm seconds and discards, which would otherwise head to the landfill. It's non-GMO, pathogen-free and chicken manure-free."
    },

    {
        type: 'gt',
        file: '../img/products/Gardeners Lifetime Potting Trowel.webp',
        name: "Gardener's Lifetime Potting Trowel",
        price: '29.99',
        lprice: '',
        colors: [],
        scolor: '',
        description: "Gardener’s Lifetime Tools are handmade for us in Holland by DeWit Garden Tools, a fourth-generation, family-owned business that has been crafting fine gardening tools for more than a century. "
    },

    {
        type: 'gt',
        file: '../img/products/Castellari Superior Gardening Shears.webp',
        name: "Castellari Superior Gardening Shears",
        price: '99.99',
        lprice: '',
        colors: [],
        scolor: '',
        description: "These lightweight shears have long, sharp blades and central shock absorbers that effectively eliminate the vibration that can cause arm fatigue and stress."
    },
]


localStorage.setItem('selectedItem', JSON.stringify(allproducts[JSON.parse(localStorage.getItem('itemidx'))]));
// window.location.reload();

var productcards = [];

var cartitems = getCurrentUserFromSessionStorage().cartitems;
// Assuming you have a container element for the cart items
const cartContainer = document.querySelector('.cart-items');
updateCart();


function productcard(products, i) {
    let card = document.createElement('div');
    card.className = 'product-card';


    let image = document.createElement('div');
    card.appendChild(image);
    image.className = 'product-image';

    let img = document.createElement('img');
    img.src = products[i].file;
    image.appendChild(img);
    img.addEventListener('click', () => {
        localStorage.setItem('selectedItem', JSON.stringify(allproducts[allproducts.indexOf(products[i])]));
        let selectedItem = JSON.parse(localStorage.getItem('selectedItem'));
        let idx = allproducts.indexOf(products[i]);
        localStorage.setItem('itemidx', JSON.stringify(idx));
        window.location.href = '../Productpage/product.html';
    })

    let info = document.createElement('div');
    info.className = 'product-info';
    card.appendChild(info);

    let name = document.createElement('div');
    name.className = 'product-name';
    name.innerText = products[i].name;
    info.appendChild(name);

    let price = document.createElement('div');
    let p = document.createElement('p');
    price.appendChild(p);
    price.className = 'product-price';
    p.innerText = '$' + products[i].price;
    info.appendChild(price);

    if (products[i].lprice > products[i].price) {
        let span = document.createElement('span');
        price.appendChild(span);
        span.innerText = '$' + products[i].lprice;
    }

    let pcol = document.createElement('div');
    info.appendChild(pcol);
    pcol.className = 'product-color';


    products[i].colors.forEach((color) => {
        let span = document.createElement('span');
        span.className = 'color';
        span.style.backgroundColor = color;
        span.style.width = '20px';
        span.style.height = '20px';
        span.style.borderRadius = '50%';
        span.style.display = 'flex';
        span.style.alignItems = 'center';
        span.style.justifyContent = 'center';
        span.style.gap = '5px';
        span.style.border = '1px solid white';
        pcol.appendChild(span);

        span.addEventListener('click', function (e) {
            card.querySelectorAll('.color').forEach(function (el) {
                el.style.border = '1px solid white';
            });

            this.style.border = '3px solid #ffff';

            let selectedColor = this.style.backgroundColor;
            products[i].scolor = selectedColor;
        });
        card.querySelector('.color').style.border = '3px solid #ffff';
    });





    let options = document.createElement('div');
    info.appendChild(options);
    options.className = 'product-options';

    let buybtn = document.createElement('button');
    options.appendChild(buybtn);
    buybtn.className = 'btn';
    buybtn.innerText = 'Buy Now';

    buybtn.addEventListener('click', () => {
        let costjson = JSON.parse(products[i].price);
        sessionStorage.setItem('price', costjson);
        window.location.href = '../Buynow/payment.html';
    })

    let cartbtn = document.createElement('button');
    cartbtn.className = 'addtocart btn'
    options.appendChild(cartbtn);
    cartbtn.innerText = 'Add to Cart';
    cartbtn.addEventListener('click', () => addToCart(allproducts.indexOf(products[i])));
    return card;
}

for (let i = 0; i < allproducts.length; i++) {
    productcards.push(productcard(allproducts, i));
}

function showproducts(elonpage, page, products, container) {
    container.innerHTML = '';
    for (let i = (page - 1) * elonpage; i < Math.min(elonpage * page, products.length); i++) {
        container.appendChild(productcard(products, i));
    }
}

//Generează paginarea și afișarea produselor pe pagină
function pagination(elonpage, products, container, pcontainer) {
    container.innerHTML = '';
    let pages = Math.ceil(products.length / elonpage);
    pcontainer.dataset.page = 1;

    //Butonul catre pagina anterioara
    let prevBtn = document.createElement('button');
    prevBtn.innerText = '<';
    container.appendChild(prevBtn);
    prevBtn.addEventListener('click', () => {
        const currentPage = parseInt(pcontainer.dataset.page);
        const prevPage = currentPage - 1;
        if (prevPage >= 1) {
            pcontainer.innerText = '';
            showproducts(elonpage, prevPage, products, pcontainer);
            pcontainer.dataset.page = prevPage;
        }
    });

    //crearea butoanelor catre pagina dupa numar
    let pagesContainer = document.createElement('div');
    pagesContainer.className = 'pages-container';
    container.appendChild(pagesContainer);

    for (let i = 1; i <= pages; i++) {
        let pagebtn = document.createElement('button');
        pagebtn.className = 'page-btn';
        pagesContainer.appendChild(pagebtn);
        pagebtn.innerText = i;
        pagebtn.addEventListener('click', () => {
            showproducts(elonpage, i, products, pcontainer);
            pcontainer.dataset.page = i;
        });
    }
    pagesContainer.querySelector('.page-btn').style.color = '#66D764';


    //butonul catre pagina urmatoare
    let nextBtn = document.createElement('button');
    nextBtn.innerText = '>';
    container.appendChild(nextBtn);
    nextBtn.addEventListener('click', () => {
        const currentPage = parseInt(pcontainer.dataset.page);
        const nextPage = currentPage + 1;
        if (nextPage <= pages) {
            pcontainer.innerText = '';
            showproducts(elonpage, nextPage, products, pcontainer);
            pcontainer.dataset.page = nextPage;
        }
    });

    //adaugarea de evenimente pentru butoane
    container.querySelectorAll('button').forEach((el) => {
        el.addEventListener('click', () => {
            window.scrollTo(0, 0);
            container.querySelectorAll('.page-btn').forEach((ell) => {
                if (ell.innerText == pcontainer.dataset.page) {
                    ell.style.color = '#66D764';
                } else {
                    ell.style.color = 'black';
                }
            });
        });
    });
}


function filteroptions(container, products) {

    //Optiunea de sortare dupa pret
    const sort = document.createElement('select');
    sort.className = 'sort';
    container.appendChild(sort);
    sort.add(new Option('Highest', 'Highest'));
    sort.add(new Option('Lowest', 'Lowest'));
    let defaultop = new Option('Price', '');
    defaultop.selected = true;
    defaultop.style.display = 'none';
    sort.add(defaultop);

    //Optiunea de selectare a numarului de elemente pe pagina
    const elsonpage = document.createElement('select');
    elsonpage.className = 'elonpage';
    container.appendChild(elsonpage);
    elsonpage.add(new Option('1', '1'));
    elsonpage.add(new Option('2', '2'));
    elsonpage.add(new Option('3', '3'));
    elsonpage.add(new Option('4', '4'));
    elsonpage.add(new Option('8', '8'));
    elsonpage.add(new Option('12', '12'));
    elsonpage.add(new Option('16', '16'));
    elsonpage.add(new Option('20', '20'));
    elsonpage.add(new Option('All', `${products.length}`));
}

function addToCart(idx) {
    let productToAdd = allproducts[idx];
    let productcolor = allproducts[idx].scolor;

    let existingProductIndex = cartitems.findIndex(item => item.product.name === productToAdd.name && item.color === productcolor);

    //Evitarea repetarii cartonasului produsului in cos prin incrementarea numarului produselor de acelasi fel
    if (existingProductIndex !== -1) {
        cartitems[existingProductIndex].count += 1;
    } else {
        cartitems.push({
            product: productToAdd,
            color: productcolor,
            count: 1
        });
    }

    alert('Added to cart!')
    updateCart();
}



function updateCart() {
    let total = 0;
    // Clear the cart container
    cartContainer.innerHTML = '';

    // Iterate over the cart items
    for (const cartItem of cartitems) {

        // Create a cart item element
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');

        // Create and set the image source
        const imageElement = document.createElement('img');
        imageElement.src = cartItem.product.file;
        imageElement.alt = cartItem.product.name;
        cartItemElement.appendChild(imageElement);

        // Create and set the product name
        const nameElement = document.createElement('div');
        nameElement.classList.add('cart-item-name');
        nameElement.textContent = cartItem.product.name;
        cartItemElement.appendChild(nameElement);

        // Color
        let span = document.createElement('span');
        cartItemElement.appendChild(span);
        span.className = 'color';
        span.style.backgroundColor = cartItem.color;
        span.style.width = '20px';
        span.style.height = '20px';
        span.style.borderRadius = '50%';
        span.style.display = 'flex';
        span.style.alignItems = 'center';
        span.style.justifyContent = 'center';
        span.style.gap = '5px';
        span.style.border = '1px solid white';

        // Create and set the product count container
        const countContainer = document.createElement('div');
        countContainer.classList.add('cart-item-count');
        cartItemElement.appendChild(countContainer);

        // Create the decrease count button
        const decreaseCountButton = document.createElement('button');
        decreaseCountButton.textContent = '-';
        decreaseCountButton.addEventListener('click', () => changeProductCount(cartItem, -1));
        countContainer.appendChild(decreaseCountButton);

        // Create and set the product count
        const countElement = document.createElement('span');
        countElement.textContent = cartItem.count;
        countContainer.appendChild(countElement);

        // Create the increase count button
        const increaseCountButton = document.createElement('button');
        increaseCountButton.textContent = '+';
        increaseCountButton.addEventListener('click', () => changeProductCount(cartItem, 1));
        countContainer.appendChild(increaseCountButton);

        // Create and set the product cost
        const costElement = document.createElement('div');
        costElement.classList.add('cart-item-cost');
        costElement.textContent = `$${(cartItem.product.price * cartItem.count).toFixed(2)}`;
        cartItemElement.appendChild(costElement);

        total += Number((cartItem.product.price * cartItem.count).toFixed(2));


        // Create and set the remove button
        const removeElement = document.createElement('div');
        removeElement.classList.add('cart-item-remove');
        removeElement.innerHTML = `<img src="../img/trash.svg">`;
        removeElement.addEventListener('click', () => removeCartItem(cartItem));
        cartItemElement.appendChild(removeElement);

        // Append the cart item element to the cart container
        cartContainer.appendChild(cartItemElement);
    }

    document.querySelector('.cart-buy').innerText = 0;
    document.querySelector('.cart-buy').innerText = `$${total.toFixed(2)}`;

    // Update the cart items count
    const itemCount = cartitems.reduce((total, cartItem) => total + cartItem.count, 0);
    document.querySelector('.cart-items-count').textContent = itemCount;





    let currentUser = getCurrentUserFromSessionStorage();
    if (currentUser) {
        console.log('Current user:', currentUser);
        currentUser.cartitems = cartitems;
        saveCurrentUserToSessionStorage(currentUser);
        updateCurrentUserInLocalStorage(currentUser);
        // Perform any actions with the current user here
    } else {
        console.log('No user currently logged in');
        cartitems = [];
    }
}

function changeProductCount(cartItem, amount) {
    cartItem.count += amount;
    if (cartItem.count < 0) {
        cartItem.count = 0;
    }
    updateCart();
}


function removeCartItem(cartItem) {
    // Find the index of the cart item in the cartitems array
    const cartItemIndex = cartitems.findIndex(item => item === cartItem);

    if (cartItemIndex !== -1) {
        // Remove the cart item from the cartitems array
        cartitems.splice(cartItemIndex, 1);
        // Update the cart display
        updateCart();
    }
}

function getUsersFromLocalStorage() {
    // Retrieve the users from local storage
    const usersJson = localStorage.getItem('users');
    return usersJson ? JSON.parse(usersJson) : [];
}

function saveUsersToLocalStorage(users) {
    // Save the users in local storage
    const usersJson = JSON.stringify(users);
    localStorage.setItem('users', usersJson);
}

function updateCurrentUserInLocalStorage(updatedUser) {
    const users = getUsersFromLocalStorage();
    const index = users.findIndex(user => user.username === updatedUser.username);
    if (index !== -1) {
        users[index] = updatedUser;
        saveUsersToLocalStorage(users);
        console.log('User updated');
    }
}

function saveCurrentUserToSessionStorage(user) {
    const currentUserJson = JSON.stringify(user);
    sessionStorage.setItem('currentUser', currentUserJson);
}

function getCurrentUserFromSessionStorage() {
    const currentUserJson = sessionStorage.getItem('currentUser');
    return currentUserJson ? JSON.parse(currentUserJson) : null;
}

// Search

//Cautarea dupa nume
function searchByName(searchTerm) {
  searchTerm = searchTerm.toLowerCase();
  
  return allproducts.filter(product => {
    const productName = product.name.toLowerCase();
    return productName.includes(searchTerm);
  });
}

//Evenimentul pentru bara de cautare
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
  const searchTerm = this.value;
  const searchResults = searchByName(searchTerm);
  createDataList(searchResults);
});

//Crearea listei de optiuni pentru cautare
function createDataList(results) {
  const dataList = document.createElement('datalist');
  dataList.id = 'searchOptions';

  results.forEach(result => {
    const option = document.createElement('option');
    option.value = result.name;
    dataList.appendChild(option);
  });

  // Stergerea listei precedente(daca exista)
  const previousDataList = document.getElementById('searchOptions');
  if (previousDataList) {
    previousDataList.remove();
  }

  const container = document.getElementById('searchContainer');

  // Afisarea listei actualizate
  container.appendChild(dataList);
}


