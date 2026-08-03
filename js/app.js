// Game database for the app home page
const gameDatabase = {
    recent: [
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg", title: "博德之门3", desc: "在被遗忘国度中召集队友，重返冒险之旅。" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg", title: "艾尔登法环", desc: "觉醒吧，褪色者，顺应恩惠的指引。" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg", title: "赛博朋克2077", desc: "在夜城体验开放世界动作冒险角色扮演游戏。" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg", title: "黯黑神话：悟空", desc: "基于中国神话与西游记的动作角色扮演游戏。" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/546560/header.jpg", title: "半衰期：艾莉克斯", desc: "Valve在VR中重返半衰期世界。" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg", title: "Rust", desc: "收集资源、建造基地，并在荒野中求生。" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg", title: "星露谷物语", desc: "在乡村农场自由耕作、种植与经营生活。" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg", title: "侠盗猎车手5", desc: "在开放世界中体验抢劫、飞车与动感冒险。" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg", title: "荒野大镖客2", desc: "美国荒野中的史诗人生与救赎故事。" },
        { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg", title: "蜘蛛侠2", desc: "在纽约天际线上展开超级英雄冒险。" },
        { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1751830/header.jpg", title: "艾伦·维克2", desc: "Remedy的心理惊悚续作。" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2381590/header.jpg", title: "只要向上", desc: "快速反应的惊险攀爬挑战。" },
        { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1868140/header.jpg", title: "深潜员戴夫", desc: "探索海底遗迹并经营你的餐厅。" },
        { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/346110/header.jpg", title: "方舟", desc: "驯服恐龙、建造基地，并在荒野求生。" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg", title: "生化危机4", desc: "现代动作风格重制的生存恐怖经典。" }
    ],
    act: [
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg", title: "侠盗猎车手5", desc: "探索洛圣都与布莱恩县的开放世界。" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg", title: "荒野大镖客2", desc: "美国荒野中的史诗生活与救赎。" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1088850/header.jpg", title: "赛博猎人", desc: "未来科技战场上的求生大逃杀。" }
    ],
    fps: [
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg", title: "反恐精英2", desc: "反恐精英历史上的最大技术飞跃。" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/header.jpg", title: "Apex 英雄", desc: "在免费英雄射击战中用角色征服对手。" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/578080/header.jpg", title: "绝地求生", desc: "跳伞、抢装备并智取敌人求生。" }
    ],
    sport: [
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/header.jpg", title: "EA SPORTS FC 24", desc: "HyperMotionV带来最真实的足球体验。" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2338770/header.jpg", title: "NBA 2K24", desc: "体验纯粹篮球竞技快感。" }
    ],
    rpg: [
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1151640/header.jpg", title: "最终幻想14", desc: "知名大型多人在线角色扮演游戏，展开广阔奇幻冒险。" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/291550/header.jpg", title: "巫师3", desc: "化身杰洛特，狩猎北方王国的怪物。" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222670/header.jpg", title: "地平线：黎明时分", desc: "探索充满机兽的后末世绿野。" }
    ],
    adventure: [
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1057090/header.jpg", title: "死亡搁浅", desc: "在破碎美国展开独特开放世界冒险。" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1240440/header.jpg", title: "瘟疫传说", desc: "潜行黑暗时代，体验故事驱动的冒险。" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/359550/header.jpg", title: "漫长寒夜", desc: "冰天雪地中的孤独生存体验。" }
    ],
    sim: [
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/108600/header.jpg", title: "微软飞行模拟器", desc: "驾驶真实飞机飞遍整个星球。" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/255710/header.jpg", title: "都市：天际线", desc: "建设并管理你的现代都市。" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/366320/header.jpg", title: "模拟人生4", desc: "创造并操控虚拟世界中的人物。" }
    ]
};

const adminStorageKeys = {
    games: 'cloudzoneAdminGames',
    servers: 'cloudzoneAdminServers',
    sessions: 'cloudzoneAdminSessions',
    packages: 'cloudzoneAdminPackages'
};

const pageCache = {};

function readAdminStorage(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
        return fallback;
    }
}

function saveAdminStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getAppLanguage() {
    return localStorage.getItem('cloudzoneLanguage') || 'zh';
}

function setAppLanguage(lang) {
    localStorage.setItem('cloudzoneLanguage', lang);
}

function toggleLanguage() {
    const current = getAppLanguage();
    const next = current === 'zh' ? 'vi' : 'zh';
    setAppLanguage(next);
    applyLanguage(next);
}

function applyLanguage(lang) {
    const homeLabel = document.querySelector('#nav-home div');
    const gamesLabel = document.querySelector('#nav-games div');
    const cloudLabel = document.querySelector('#nav-cloud div');
    const profileLabel = document.querySelector('#nav-profile div');
    const logoutButton = document.getElementById('profile-logout-btn');
    const settingsLabel = document.getElementById('profile-settings-label');
    const languageLabel = document.getElementById('profile-language-label');
    const inviteLabel = document.querySelector('#profile-language-row');
    if (lang === 'vi') {
        if (homeLabel) homeLabel.textContent = 'Trang chủ';
        if (gamesLabel) gamesLabel.textContent = 'Thư viện';
        if (cloudLabel) cloudLabel.textContent = 'Máy tính';
        if (profileLabel) profileLabel.textContent = 'Của tôi';
        if (logoutButton) logoutButton.textContent = 'Đăng xuất';
        if (settingsLabel) settingsLabel.textContent = 'Cài đặt';
        if (languageLabel) languageLabel.textContent = 'Chuyển sang tiếng Trung';
    } else {
        if (homeLabel) homeLabel.textContent = '首页';
        if (gamesLabel) gamesLabel.textContent = '游戏库';
        if (cloudLabel) cloudLabel.textContent = '电脑';
        if (profileLabel) profileLabel.textContent = '我的';
        if (logoutButton) logoutButton.textContent = '退出登录';
        if (settingsLabel) settingsLabel.textContent = '设置';
        if (languageLabel) languageLabel.textContent = 'Dịch sang tiếng Việt';
    }
}

// Simple DOM translation helpers: map exact substrings from Chinese -> Vietnamese
const zhToVi = {
    '首页': 'Trang chủ',
    '游戏库': 'Thư viện',
    '电脑': 'Máy tính',
    '我的': 'Của tôi',
    '退出登录': 'Đăng xuất',
    '设置': 'Cài đặt',
    'Dịch sang tiếng Việt': 'Dịch sang tiếng Việt',
    '区域': 'Khu vực',
    '体验服务器': 'Máy chủ trải nghiệm',
    '支付服务器': 'Máy chủ trả phí',
    '免费服务器': 'Máy chủ miễn phí',
    '立即体验': 'Trải nghiệm ngay',
    '进入': 'Vào',
    '列表': 'Danh sách',
    '连接': 'Kết nối',
    '说明': 'Hướng dẫn',
    '在Android上畅玩电脑游戏': 'Trải nghiệm PC trên Android',
    '新手专享': 'Dành cho người mới',
    '免费': 'Miễn phí',
    '免费体验包': 'Gói trải nghiệm miễn phí',
    '首次用户专享': 'Dành cho người dùng mới',
    '支付币': 'Đồng thanh toán',
    '剩余：0 币': 'Còn: 0 đồng',
    '正在加载...': 'Đang tải...',
    '未找到游戏': 'Không tìm thấy trò chơi',
    '返回登录': 'Quay lại đăng nhập',
    '系统正在维护中': 'Hệ thống đang bảo trì',
    '请稍后再试。只有管理员在维护期间可访问。': 'Vui lòng thử lại sau. Chỉ quản trị viên có thể truy cập trong thời gian bảo trì.'
};

function translateMainContent(lang) {
    const root = document.getElementById('main-content');
    if (!root) return;
    const map = lang === 'vi' ? zhToVi : null;

    // Walk element nodes and translate leaf text-containing elements.
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, null, false);
    const elements = [];
    while (walker.nextNode()) elements.push(walker.currentNode);

    elements.forEach(el => {
        // only consider elements whose children are text-only (no child element nodes)
        const hasElementChild = Array.from(el.childNodes).some(n => n.nodeType === 1);
        if (hasElementChild) return;
        const original = el.dataset.origText || el.textContent || '';
        if (!el.dataset.origText) el.dataset.origText = original;
        if (!map) {
            // restore
            el.textContent = el.dataset.origText || original;
            return;
        }
        let translated = original;
        Object.keys(map).forEach(k => {
            if (!k) return;
            // replace all occurrences
            translated = translated.split(k).join(map[k]);
        });
        el.textContent = translated;
    });
}

// integrate into applyLanguage so that fragment content is translated/ restored
const originalApplyLanguage = applyLanguage;
applyLanguage = function(lang) {
    try { originalApplyLanguage(lang); } catch (e) { /* ignore */ }
    try { translateMainContent(lang); } catch (e) { /* ignore */ }
};

function getRegistrationEnabled() {
    return localStorage.getItem('cloudzoneRegistrationEnabled') !== 'false';
}

function setRegistrationEnabled(value) {
    localStorage.setItem('cloudzoneRegistrationEnabled', value ? 'true' : 'false');
}

function seedAdminGameData() {
    const existing = readAdminStorage(adminStorageKeys.games, null);
    const seeded = [];
    Object.entries(gameDatabase).forEach(([category, items]) => {
        items.forEach((game, index) => {
            seeded.push({
                id: `${category}-${index + 1}`,
                title: game.title,
                desc: game.desc,
                img: game.img,
                category
            });
        });
    });

    if (!existing) {
        saveAdminStorage(adminStorageKeys.games, seeded);
        return;
    }

    const merged = seeded.map(game => {
        const existingItem = existing.find(item => item.id === game.id);
        return existingItem ? { ...existingItem, ...game } : game;
    });

    existing.forEach(item => {
        if (!merged.some(game => game.id === item.id)) {
            merged.push(item);
        }
    });

    saveAdminStorage(adminStorageKeys.games, merged);
}

function getGameCatalogData() {
    seedAdminGameData();
    const customGames = readAdminStorage(adminStorageKeys.games, []);
    const catalog = {};
    Object.keys(gameDatabase).forEach(category => {
        catalog[category] = [...(gameDatabase[category] || [])];
    });
    customGames.forEach(game => {
        const targetCategory = game.category || 'recent';
        if (!catalog[targetCategory]) catalog[targetCategory] = [];
        const exists = catalog[targetCategory].some(item => item.title === game.title);
        if (!exists) {
            catalog[targetCategory].push({ img: game.img, title: game.title, desc: game.desc });
        }
    });
    return catalog;
}

const gameDetailData = {
    "博德之门3": {
        img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg",
        title: "博德之门3",
        desc: "在被遗忘国度中召集队友，重返冒险之旅。",
        details: "踏上深邃奇幻世界，选择你的盟友并面对命运的考验。"
    },
    "艾尔登法环": {
        img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",
        title: "艾尔登法环",
        desc: "觉醒吧，褪色者，顺应恩惠的指引。",
        details: "探索宽广的开放世界，挑战强力敌人并揭开远古秘密。"
    },
    "赛博朋克2077": {
        img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
        title: "赛博朋克2077",
        desc: "在夜城体验开放世界动作冒险角色扮演游戏。",
        details: "扮演义体化赏金猎人，改写命运，揭露城市中的阴谋。"
    },
    "黯黑神话：悟空": {
        img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg",
        title: "黯黑神话：悟空",
        desc: "基于中国神话与西游记的动作角色扮演游戏。",
        details: "化身孙悟空，运用七十二变与神话怪物展开热血战斗。"
    },
    "侠盗猎车手5": {
        img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg",
        title: "侠盗猎车手5",
        desc: "在开放世界中体验抢劫、飞车与动感冒险。",
        details: "进入洛圣都，完成任务、驾驶赛车，并与朋友在线狂欢。"
    },
    "荒野大镖客2": {
        img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg",
        title: "荒野大镖客2",
        desc: "美国荒野中的史诗人生与救赎故事。",
        details: "作为亚瑟·摩根，面对帮派与时代变迁，探索广袤西部世界。"
    },
    "蜘蛛侠2": {
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg",
        title: "蜘蛛侠2",
        desc: "在纽约天际线上展开超级英雄冒险。",
        details: "用蜘蛛感官、快速移动和战斗技巧保卫城市免受邪恶威胁。"
    },
    "艾伦·维克2": {
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1751830/header.jpg",
        title: "艾伦·维克2",
        desc: "Remedy的心理惊悚续作。",
        details: "追寻失踪的妻子，面对超自然恐怖并揭开黑暗故事。"
    },
    "只要向上": {
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/2381590/header.jpg",
        title: "只要向上",
        desc: "快速反应的惊险攀爬挑战。",
        details: "在节奏紧凑的竞速关卡中冲刺，挑战极限攀爬速度。"
    },
    "深潜员戴夫": {
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1868140/header.jpg",
        title: "深潜员戴夫",
        desc: "探索海底遗迹并经营你的餐厅。",
        details: "收集食材、制作料理并扩展你的海底餐厅帝国。"
    },
    "方舟": {
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/346110/header.jpg",
        title: "方舟",
        desc: "驯服恐龙、建造基地，并在荒野求生。",
        details: "在恐龙横行的世界中生存、探索并打造自己的部落。"
    },
    "生化危机4": {
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg",
        title: "生化危机4",
        desc: "现代动作风格重制的生存恐怖经典。",
        details: "与莱昂一同深入村落，揭开邪教阴谋并生存下来。"
    },
    "使命召唤": {
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg",
        title: "使命召唤",
        desc: "体验震撼剧情与激烈多人对战。",
        details: "加入现代战场，完成任务并在多人模式中击败对手。"
    },
    "博德之门3": {
        img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg",
        title: "博德之门3",
        desc: "在被遗忘国度中召集队友，重返冒险之旅。",
        details: "组队探索世界、决策影响剧情，并展开高自由度战斗。"
    },
    "霍格沃茨：遗产": {
        img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/header.jpg",
        title: "霍格沃茨：遗产",
        desc: "进入魔法学校，解开古老魔法秘密。",
        details: "学习咒语、培养魔法宠物，并探索霍格沃茨及其周边环境。"
    },
    "塞尔达：荒野之息": {
        img: "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
        title: "塞尔达：荒野之息",
        desc: "体验开放世界中的探索与冒险。",
        details: "弓箭、解谜与远古遗迹，重建海拉尔的传说冒险。"
    },
    "地平线：西之禁域": {
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1240440/header.jpg",
        title: "地平线：西之禁域",
        desc: "探索充满机兽的后末世绿野。",
        details: "驾驶猎人机甲狩猎、探索废墟并揭示未来文明秘密。"
    }
};

window.currentGameDetail = null;

function getGameDetailInfo(title) {
    if (!title) return null;
    if (gameDetailData[title]) return gameDetailData[title];
    const catalog = getGameCatalogData();
    for (const list of Object.values(catalog)) {
        const found = list.find(item => item.title === title || item.title?.toLowerCase() === title?.toLowerCase());
        if (found) {
            return {
                img: found.img,
                title: found.title,
                desc: found.desc,
                details: found.desc
            };
        }
    }
    return {
        img: 'https://via.placeholder.com/720x405/111827/ffffff?text=No+Image',
        title: title,
        desc: '暂无详细介绍。',
        details: '此游戏暂时没有更多信息，欢迎返回游戏库继续浏览其他内容。'
    };
}

function openGameDetail(title, fromPage = 'home') {
    window.currentGameDetail = getGameDetailInfo(title);
    window.previousPage = fromPage || 'home';
    switchPage('game-detail');
}

function initHomeGameLinks() {
    const cards = document.querySelectorAll('#main-content div[style*="cursor: pointer"]');
    cards.forEach(card => {
        const titleEl = card.querySelector('p');
        if (!titleEl) return;
        const title = titleEl.textContent.trim();
        if (!title) return;
        card.onclick = () => openGameDetail(title);
    });
}

function initGameDetailPage() {
    const detail = window.currentGameDetail || {
        img: 'https://via.placeholder.com/720x405/111827/ffffff?text=No+Image',
        title: 'Trò chơi chưa rõ',
        desc: 'Vui lòng chọn một trò chơi để xem chi tiết.',
        details: 'Nhấn vào một game trong danh sách để xem mô tả đầy đủ và ảnh bìa.'
    };
    const titleEl = document.getElementById('detail-game-title');
    const subtitleEl = document.getElementById('detail-game-subtitle');
    const descEl = document.getElementById('detail-game-desc');
    const imgEl = document.getElementById('detail-game-img');
    const badgeEl = document.getElementById('detail-game-badge');

    if (titleEl) titleEl.textContent = detail.title;
    if (subtitleEl) subtitleEl.textContent = detail.desc;
    if (descEl) descEl.textContent = detail.details;
    if (imgEl) {
        imgEl.src = detail.img;
        imgEl.alt = detail.title;
    }
    if (badgeEl) badgeEl.textContent = detail.title;
}

function enterApp() {
    const bottomNav = document.querySelector('.bottom-nav');
    if (bottomNav) bottomNav.classList.remove('hidden');
    switchPage('home');
}

function showAlert(elementId, message, type = 'error') {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.textContent = message;
    el.style.display = message ? 'block' : 'none';
    el.classList.toggle('success', type === 'success');
    el.style.color = type === 'success' ? '#34d399' : '#f87171';
}

const ACCOUNT_STORAGE_KEY = 'cloudzoneAccounts';
const CURRENT_USER_KEY = 'cloudzoneCurrentUser';

function getStoredUsersLocal() {
    try {
        const raw = localStorage.getItem(ACCOUNT_STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (error) {
        return [];
    }
}

function saveStoredUsersLocal(users) {
    localStorage.setItem(ACCOUNT_STORAGE_KEY, JSON.stringify(users));
}

function mergeUserLists(remoteUsers, localUsers) {
    const merged = [...remoteUsers];
    const emails = new Set(remoteUsers.map(u => u.email?.toLowerCase()));
    localUsers.forEach(user => {
        const email = user.email?.toLowerCase();
        if (email && !emails.has(email)) {
            merged.push(user);
        }
    });
    return merged;
}

function supportsRemoteUsers() {
    return typeof apiGet === 'function' && typeof apiPut === 'function' && typeof apiPost === 'function' && typeof apiDelete === 'function';
}

async function loadUsers() {
    const localUsers = getStoredUsersLocal();
    if (supportsRemoteUsers()) {
        try {
            const remoteUsers = await apiGet('/users');
            const mergedUsers = mergeUserLists(remoteUsers || [], localUsers || []);
            if (mergedUsers.length !== (remoteUsers || []).length) {
                await persistUsers(mergedUsers);
            }
            return mergedUsers;
        } catch (error) {
            console.warn('Remote user API unavailable, using local fallback.', error);
        }
    }
    return localUsers;
}

async function persistUsers(users) {
    if (supportsRemoteUsers()) {
        try {
            await apiPut('/users', { users });
            saveStoredUsersLocal(users);
            return;
        } catch (error) {
            console.warn('Remote persist users failed, using local fallback.', error);
        }
    }
    saveStoredUsersLocal(users);
}

async function createRemoteUser(user) {
    if (!supportsRemoteUsers()) return null;
    try {
        return await apiPost('/users', user);
    } catch (error) {
        console.warn('Remote create user failed, fallback to local.', error);
        return null;
    }
}

async function updateRemoteUser(email, payload) {
    if (!supportsRemoteUsers()) return null;
    try {
        return await apiPut(`/users/${encodeURIComponent(email)}`, payload);
    } catch (error) {
        console.warn('Remote update user failed, fallback to local.', error);
        return null;
    }
}

async function deleteRemoteUser(email) {
    if (!supportsRemoteUsers()) return null;
    try {
        return await apiDelete(`/users/${encodeURIComponent(email)}`);
    } catch (error) {
        console.warn('Remote delete user failed, fallback to local.', error);
        return null;
    }
}

function getStoredUsers() {
    return getStoredUsersLocal();
}

function saveStoredUsers(users) {
    saveStoredUsersLocal(users);
}

async function ensureDefaultAdmin() {
    const users = await loadUsers();
    // If some users lack country info but have an IP, try a lightweight client-side lookup
    try {
        const needLookup = users.filter(u => (u.ip && u.ip.trim()) && (!u.country || u.country === 'Unknown'));
        if (needLookup.length) {
            for (const u of needLookup) {
                try {
                    const resp = await fetch(`https://ipapi.co/${u.ip}/country/`, { cache: 'no-store' });
                    if (resp && resp.ok) {
                        const txt = (await resp.text()).trim();
                        if (txt && txt.length === 2) {
                            u.country = txt.toUpperCase();
                        }
                    }
                } catch (e) {
                    // ignore lookup failures
                }
            }
            // persist updates if any country values filled
            const updatedAny = users.some(uu => uu.country && uu.country !== 'Unknown');
            if (updatedAny) await persistUsers(users);
        }
    } catch (e) { /* ignore */ }
    const adminEmail = 'admin@cloudzone.com';
    const existing = users.find(user => user.email.toLowerCase() === adminEmail);
    if (!existing) {
        users.push({
            id: generateRandomId(),
            name: 'Admin',
            email: adminEmail,
            password: 'admin123',
            role: 'admin'
        });
        await persistUsers(users);
    }
}

async function findUserByEmail(email) {
    if (!email) return null;
    const users = await loadUsers();
    return users.find(user => user.email.toLowerCase() === email.toLowerCase()) || null;
}

function setCurrentUser(email) {
    localStorage.setItem(CURRENT_USER_KEY, email);
}

function getCurrentUserEmail() {
    return localStorage.getItem(CURRENT_USER_KEY);
}

function getCurrentUser() {
    const email = getCurrentUserEmail();
    if (!email) return null;
    return {
        id: localStorage.getItem('limoreUserId') || generateRandomId(),
        name: localStorage.getItem('limoreUsername') || '',
        email,
        role: getCurrentUserRole()
    };
}

function countryCodeToFlag(cc) {
    if (!cc || typeof cc !== 'string') return '';
    cc = cc.trim();
    // handle explicit local / loopback
    if (cc === '127.0.0.1' || cc.toLowerCase() === 'local' || cc.toLowerCase() === 'localhost') return '🏠';
    // if already two-letter ISO code -> convert to flag
    if (cc.length === 2) {
        return String.fromCodePoint(...[...cc.toUpperCase()].map(c => 127397 + c.charCodeAt(0)));
    }
    // common name -> map to ISO2
    const name = cc.toLowerCase();
    const nameToISO = {
        'vietnam': 'VN', 'việt nam': 'VN', 'viet nam': 'VN',
        'china': 'CN', 'trung quốc': 'CN',
        'united states': 'US', 'usa': 'US', 'us': 'US', 'việt': 'VN',
        'unknown': '', '': ''
    };
    if (nameToISO[name]) {
        const iso = nameToISO[name];
        if (iso) return String.fromCodePoint(...[...iso].map(c => 127397 + c.charCodeAt(0)));
        return '';
    }
    // try extract first 2 letters if they look like a code
    const letters = (cc.match(/[A-Za-z]{2}/) || [])[0];
    if (letters && letters.length === 2) {
        return String.fromCodePoint(...[...letters.toUpperCase()].map(c => 127397 + c.charCodeAt(0)));
    }
    return '';
}

function maskPassword(pw) {
    if (!pw) return '';
    return '••••••';
}

function clearCurrentUserSession() {
    localStorage.removeItem(CURRENT_USER_KEY);
    localStorage.removeItem('limoreUsername');
    localStorage.removeItem('limoreUserId');
    localStorage.removeItem('cloudzoneUserRole');
}

function logoutCurrentUser() {
    clearCurrentUserSession();
    switchPage('login');
}

function setLoggedInSession(user) {
    if (!user) return;
    setCurrentUser(user.email);
    localStorage.setItem('limoreUsername', user.name);
    localStorage.setItem('limoreUserId', user.id || generateRandomId());
    localStorage.setItem('cloudzoneUserRole', user.role || 'user');
}

function getCurrentUserRole() {
    return localStorage.getItem('cloudzoneUserRole') || 'user';
}

function setAuthTab(tab) {
    const loginTab = document.getElementById('tab-login');
    const registerTab = document.getElementById('tab-register');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    if (loginTab && registerTab && loginForm && registerForm) {
        loginTab.classList.toggle('active', tab === 'login');
        registerTab.classList.toggle('active', tab === 'register');
        loginForm.classList.toggle('active', tab === 'login');
        registerForm.classList.toggle('active', tab === 'register');
    }
}

async function loginWithEmailPage() {
    const email = document.getElementById('login-email')?.value.trim();
    const password = document.getElementById('login-password')?.value;
    if (!email || !password) {
        showAlert('auth-alert-login', 'Vui lòng nhập email và mật khẩu.');
        return;
    }
    const user = await findUserByEmail(email);
    if (!user) {
        showAlert('auth-alert-login', 'Tài khoản chưa được đăng ký. Vui lòng đăng ký trước.');
        return;
    }
    if (user.password !== password) {
        showAlert('auth-alert-login', 'Mật khẩu không đúng. Vui lòng thử lại.');
        return;
    }
    if (getMaintenanceMode() && user.role !== 'admin') {
        showAlert('auth-alert-login', 'Hệ thống đang bảo trì. Chỉ quản trị viên được phép truy cập.', 'error');
        return;
    }
    setLoggedInSession(user);
    showAlert('auth-alert-login', 'Đăng nhập thành công!', 'success');
    setTimeout(() => {
        enterApp();
        promptNotificationPermission();
    }, 700);
}

function openRegisterPage() {
    setAuthTab('register');
}

async function createAccountPage() {
    if (getMaintenanceMode()) {
        showAlert('auth-alert-register', 'Hệ thống đang bảo trì, tạm thời không thể đăng ký.');
        return;
    }
    if (!getRegistrationEnabled()) {
        showAlert('auth-alert-register', 'Quản trị viên đã tắt đăng ký mới.', 'error');
        return;
    }
    const name = document.getElementById('register-name')?.value.trim();
    const email = document.getElementById('register-email')?.value.trim();
    const password = document.getElementById('register-password')?.value;
    const confirm = document.getElementById('register-confirm')?.value;
    if (!name || !email || !password || !confirm) {
        showAlert('auth-alert-register', 'Vui lòng điền đầy đủ thông tin.');
        return;
    }
    if (password !== confirm) {
        showAlert('auth-alert-register', 'Xác nhận mật khẩu không khớp.');
        return;
    }
    const existing = await findUserByEmail(email);
    if (existing) {
        showAlert('auth-alert-register', 'Email này đã được đăng ký, vui lòng đăng nhập.');
        return;
    }
    const users = await loadUsers();
    const newUser = {
        id: generateRandomId(),
        name,
        email,
        password,
        role: 'user'
    };
    users.push(newUser);
    await persistUsers(users);
    try { await createServerNotification('New registration', `${name} (${email}) vừa đăng ký tài khoản.`); } catch(e) { /* ignore */ }
    setLoggedInSession(newUser);
    showAlert('auth-alert-register', 'Đăng ký thành công! Bạn đã được đăng nhập.', 'success');
    setTimeout(() => {
        enterApp();
        promptNotificationPermission();
    }, 700);
}

function continueAsGuest() {
    if (getMaintenanceMode()) {
        alert('Hệ thống đang bảo trì, không thể vào với tư cách khách.');
        return;
    }
    localStorage.setItem('limoreUsername', 'Khách');
    localStorage.setItem('limoreUserId', generateRandomId());
    enterApp();
}

// Hàm chuyển đổi qua lại giữa các trang
function switchPage(pageName) {
    recordVisitorData(pageName);
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        if (pageName === 'login') {
            mainContent.classList.add('centered');
        } else {
            mainContent.classList.remove('centered');
        }
    }

    const currentUser = getCurrentUser();
    const maintenanceOn = getMaintenanceMode();
    if (maintenanceOn && (!currentUser || currentUser.role !== 'admin')) {
        showMaintenanceScreen();
        return;
    }

    const navs = ['home', 'games', 'cloud', 'profile'];
    
    navs.forEach(nav => {
        const el = document.getElementById(`nav-${nav}`);
        if (el) {
            el.style.color = (nav === pageName) ? '#facc15' : '#94a3b8';
        }
    });

    const bottomNav = document.querySelector('.bottom-nav');
    if (bottomNav) {
        const showNav = pageName !== 'login' && pageName !== 'game-detail';
        bottomNav.classList.toggle('hidden', !showNav);
        bottomNav.style.display = showNav ? 'flex' : 'none';
    }
    if (pageName === 'login' || pageName === 'game-detail') {
        navs.forEach(nav => {
            const el = document.getElementById(`nav-${nav}`);
            if (el) el.style.color = '#94a3b8';
        });
    }

    if (maintenanceOn && pageName !== 'login' && (!currentUser || currentUser.role !== 'admin')) {
        document.getElementById('main-content').innerHTML = `
            <div style="padding: 28px; text-align: center; color: #e2e8f0;">
                <h2 style="margin-bottom: 12px;">系统正在维护中</h2>
                <p style="margin-bottom: 16px; color: #94a3b8; font-size: 14px;">请稍后再试。只有管理员在维护期间可访问。</p>
                <button onclick="switchPage('login')" style="border:none; background:#2563eb; color:#fff; border-radius:16px; padding: 12px 18px; cursor:pointer; font-size:14px;">返回登录</button>
            </div>
        `;
        return;
    }

    if (pageName === 'admin' && (!currentUser || currentUser.role !== 'admin')) {
        document.getElementById('main-content').innerHTML = `
            <div style="padding: 28px; text-align: center; color: #e2e8f0;">
                <h2 style="margin-bottom: 12px;">访问被拒绝</h2>
                <p style="margin-bottom: 16px; color: #94a3b8; font-size: 14px;">只有管理员可访问管理页面。</p>
                <button onclick="switchPage('profile')" style="border:none; background:#2563eb; color:#fff; border-radius:16px; padding: 12px 18px; cursor:pointer; font-size:14px;">返回个人中心</button>
            </div>
        `;
        return;
    }

    const pageUrl = pageName === 'login'
        ? new URL('login/login.html', location.href).href
        : new URL(`pages/${pageName}.html`, location.href).href;

    const loadingHtml = `
        <div style="padding: 24px; text-align: center; color: #eef2ff;">
            <div style="margin: 0 auto 14px; width: 30px; height: 30px; border: 3px solid rgba(255,255,255,0.18); border-top-color:#facc15; border-radius:50%; animation: spin 0.8s linear infinite;"></div>
            <div style="font-size: 14px; color: #cbd5e1;">Đang tải...</div>
        </div>
    `;

    if (pageCache[pageName]) {
        document.getElementById('main-content').innerHTML = pageCache[pageName];
        if (pageName === 'games' || pageName === 'home') {
            initGameInterface();
        } else if (pageName === 'area') {
            initAreaPage();
        } else if (pageName === 'game-detail') {
            initGameDetailPage();
        }
        if (pageName === 'home') {
            initHomeGameLinks();
        }
        if (pageName === 'profile') {
            updateProfileData();
        }
        if (pageName === 'admin') {
            initAdminPage();
        }
        // áp dụng ngôn ngữ hiện tại cho nội dung vừa chèn
        try { applyLanguage(getAppLanguage()); } catch (e) { /* ignore */ }
        return;
    }

    document.getElementById('main-content').innerHTML = loadingHtml;

    fetch(pageUrl)
        .then(response => {
            if (!response.ok) throw new Error("无法加载页面");
            return response.text();
        })
        .then(html => {
            pageCache[pageName] = html;
            document.getElementById('main-content').innerHTML = html;
            if (pageName === 'games' || pageName === 'home') {
                initGameInterface();
            } else if (pageName === 'area') {
                initAreaPage();
            } else if (pageName === 'game-detail') {
                initGameDetailPage();
            }
            if (pageName === 'home') {
                initHomeGameLinks();
            }
            if (pageName === 'profile') {
                updateProfileData();
            }
            if (pageName === 'admin') {
                initAdminPage();
            }
            // áp dụng ngôn ngữ hiện tại cho nội dung vừa chèn
            try { applyLanguage(getAppLanguage()); } catch (e) { /* ignore */ }
        })
        .catch(error => {
            console.error("Lỗi load trang:", error);
            const isFileProtocol = location.protocol === 'file:';
            document.getElementById('main-content').innerHTML = isFileProtocol
                ? `<div style="color: #ef4444; text-align:center; padding: 20px; font-size: 13px;">Vui lòng mở ứng dụng qua máy chủ cục bộ, không mở trực tiếp file. Bạn có thể dùng <strong>python -m http.server</strong> hoặc triển khai lên một web server.</div>`
                : `<div style="color: #ef4444; text-align:center; padding: 20px; font-size: 13px;">Nội dung đang được cập nhật... Nếu vẫn gặp lỗi, kiểm tra cấu hình server và đường dẫn trang.</div>`;
        });
}

// page loading animation
const style = document.createElement('style');
style.innerHTML = `@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`;
document.head.appendChild(style);

// Khởi tạo giao diện game, menu danh mục bên trái và tìm kiếm
function initGameInterface() {
    const container = document.getElementById("game-list-container");
    if (!container) return;

    const buttons = document.querySelectorAll(".cat-btn");
    const searchInput = document.getElementById("game-search-input");
    let currentCategory = "recent";
    const catalog = getGameCatalogData();

    function renderGameList(list) {
        container.innerHTML = '';
        if (!list || list.length === 0) {
            container.innerHTML = `<div style="color: #94a3b8; font-size: 12px; text-align: center; padding: 20px;">未找到游戏</div>`;
            return;
        }

        list.forEach(game => {
            const card = document.createElement('div');
            card.style.display = 'flex';
            card.style.gap = '10px';
            card.style.alignItems = 'center';
            card.style.background = 'rgba(255,255,255,0.03)';
            card.style.padding = '8px';
            card.style.borderRadius = '10px';
            card.style.cursor = 'pointer';
            card.style.border = '1px solid rgba(255,255,255,0.06)';
            card.style.transition = '0.2s';

            const img = document.createElement('img');
            img.src = game.img || 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg';
            img.style.width = '90px';
            img.style.height = '50px';
            img.style.borderRadius = '6px';
            img.style.objectFit = 'cover';
            img.style.flexShrink = '0';
            img.alt = game.title || '';
            img.onerror = function() { this.onerror = null; this.src = 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg'; };

            const right = document.createElement('div');
            right.style.flex = '1';
            right.style.overflow = 'hidden';

            const h4 = document.createElement('h4');
            h4.style.color = '#f1f5f9';
            h4.style.fontSize = '12px';
            h4.style.fontWeight = '600';
            h4.style.margin = '0 0 3px 0';
            h4.style.whiteSpace = 'nowrap';
            h4.style.overflow = 'hidden';
            h4.style.textOverflow = 'ellipsis';
            h4.textContent = game.title || '未知游戏';

            const p = document.createElement('p');
            p.style.color = '#94a3b8';
            p.style.fontSize = '10px';
            p.style.margin = '0';
            p.style.lineHeight = '1.3';
            p.style.display = '-webkit-box';
            p.style.webkitLineClamp = '2';
            p.style.webkitBoxOrient = 'vertical';
            p.style.overflow = 'hidden';
            p.textContent = game.desc || '';

            right.appendChild(h4);
            right.appendChild(p);
            card.appendChild(img);
            card.appendChild(right);

            card.addEventListener('click', () => openGameDetail(game.title, 'games'));
            card.addEventListener('mouseover', () => { card.style.background = 'rgba(255,255,255,0.07)'; });
            card.addEventListener('mouseout', () => { card.style.background = 'rgba(255,255,255,0.03)'; });

            container.appendChild(card);
        });
    }

    renderGameList(catalog[currentCategory]);

    buttons.forEach(btn => {
        btn.onclick = function() {
            buttons.forEach(b => {
                b.style.color = "#94a3b8";
                b.style.fontWeight = "500";
                b.style.background = "transparent";
                b.classList.remove("active");
            });
            this.style.color = "#facc15";
            this.style.fontWeight = "bold";
            this.style.background = "rgba(250,204,21,0.1)";
            this.classList.add("active");

            currentCategory = this.getAttribute("data-category");
            if (searchInput) searchInput.value = "";
            renderGameList(catalog[currentCategory]);
        };
    });

    if (searchInput) {
        searchInput.oninput = function() {
            const keyword = this.value.toLowerCase().trim();
            const activeList = catalog[currentCategory] || [];
            
            if (!keyword) {
                renderGameList(activeList);
                return;
            }

            const filtered = activeList.filter(game => 
                game.title.toLowerCase().includes(keyword) || 
                game.desc.toLowerCase().includes(keyword)
            );
            renderGameList(filtered);
        };
    }
}

function initAreaPage() {
    const pkg1 = document.getElementById('pkg-1');
    const pkg2 = document.getElementById('pkg-2');
    const pkg3 = document.getElementById('pkg-3');
    const startBtn = document.querySelector('.area-primary-btn');

    if (pkg1) {
        pkg1.onclick = () => selectPackage(1, '99.000đ / 9 ngày', '云端电脑 1');
    }
    if (pkg2) {
        pkg2.onclick = () => selectPackage(2, '470.000đ (Gốc: 1.200.000đ)', '云端电脑 2');
    }
    if (pkg3) {
        pkg3.onclick = () => selectPackage(3, '免费', '免费体验包');
    }
    if (startBtn) {
        startBtn.onclick = openQRModal;
    }
}

async function initAdminPage() {
    const currentUser = getCurrentUser();
    if (!currentUser || currentUser.role !== 'admin') return;

    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle) pageTitle.textContent = 'Tổng quan';
    // start polling server notifications for admin
    try { startNotificationPolling(); } catch (e) { console.warn('Notification polling failed to start', e); }
    try { setupAdminSendUI(); } catch (e) { console.warn('Admin send UI init failed', e); }
    try { setupPackageEditor(); } catch (e) { console.warn('Package editor init failed', e); }

    const navButtons = document.querySelectorAll('.admin-nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            navButtons.forEach(item => item.classList.remove('active'));
            btn.classList.add('active');
            const tab = btn.getAttribute('data-tab');
            document.querySelectorAll('.admin-section').forEach(section => section.classList.toggle('active', section.id === `tab-${tab}`));
            if (pageTitle) {
                const labels = {
                    dashboard: 'Tổng quan',
                    apps: 'Quản lý ứng dụng/game',
                    servers: 'Máy chủ & GPU',
                    users: 'Quản lý người dùng',
                    sessions: 'Phiên streaming',
                    packages: 'Gói & thanh toán',
                    settings: 'Cài đặt hệ thống'
                };
                pageTitle.textContent = labels[tab] || 'Admin';
            }
        });
    });

    const users = await loadUsers();
    const adminsCount = users.filter(user => user.role === 'admin').length;
    const visits = getVisitLog();
    const maintenanceOn = getMaintenanceMode();
    const games = readAdminStorage(adminStorageKeys.games, []);
    const servers = readAdminStorage(adminStorageKeys.servers, []);
    const sessions = readAdminStorage(adminStorageKeys.sessions, []);
    const packages = readAdminStorage(adminStorageKeys.packages, []);

    const setText = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    };

    setText('dashboard-users', users.length);
    setText('dashboard-admins', adminsCount);
    setText('dashboard-visits', visits.length);
    setText('dashboard-maintenance', maintenanceOn ? 'Đã bật' : 'Đã tắt');
    setText('dashboard-games', games.length);
    setText('dashboard-sessions', sessions.length);

    const uniqueCount = new Set(visits.map(v => `${v.ip}-${v.user}`)).size;
    const recentList = document.getElementById('dashboard-recent');
    if (recentList) {
        recentList.innerHTML = visits.slice(0, 5).map(item => `
            <div class="admin-list-item">
                <div>
                    <strong>${item.user || 'Khách'}</strong>
                    <p>${item.device || 'Unknown'} • ${item.time || ''}</p>
                    <p style="font-size:10px; color:#94a3b8; margin:4px 0 0 0;">${item.ip || '0.0.0.0'} • ${item.country || 'Unknown'}</p>
                </div>
                <span>${item.page || 'unknown'}</span>
            </div>
        `).join('');
    }
    const uniqueVisitsText = document.getElementById('dashboard-unique-visits');
    if (uniqueVisitsText) {
        uniqueVisitsText.textContent = uniqueCount;
    }

    const gameList = document.getElementById('game-list');
    if (gameList) {
        gameList.innerHTML = games.length ? games.map(game => `
            <div class="admin-list-item">
                <div>
                    <strong>${game.title}</strong>
                    <p>${game.desc}</p>
                </div>
                <button class="admin-delete-btn" data-delete-game="${game.id}">Xóa</button>
            </div>
        `).join('') : '<div class="admin-empty">Chưa có game.</div>';
    }

    const serverList = document.getElementById('server-list');
    if (serverList) {
        serverList.innerHTML = servers.length ? servers.map(node => `
            <div class="admin-list-item">
                <div>
                    <strong>${node.name}</strong>
                    <p>${node.gpu}</p>
                </div>
                <span class="pill ${node.status === 'Active' ? 'ok' : 'warn'}">${node.status}</span>
            </div>
        `).join('') : '<div class="admin-empty">Chưa có node máy chủ.</div>';
    }

    const userList = document.getElementById('user-list');
    if (userList) {
        userList.innerHTML = users.length ? users.map(user => `
            <div class="admin-list-item">
                <div>
                    <strong>${countryCodeToFlag(user.country) ? countryCodeToFlag(user.country) + ' ' : ''}${(user.name && user.name.trim()) ? user.name : user.email}</strong>
                    <p>${user.email}</p>
                    <p style="font-size:12px;color:#9aa6a8;margin:6px 0 0 0;">Mật khẩu: <span class="masked-pass" data-email="${user.email}">${maskPassword(user.password)}</span> <button class="show-pass-btn" data-email="${user.email}" style="margin-left:8px;padding:4px 6px;border-radius:6px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:var(--text-muted);cursor:pointer;font-size:12px;">Hiển thị</button></p>
                    <p style="font-size:10px; color:#94a3b8; margin:4px 0 0 0;">${user.ip || ''} ${user.country || ''}</p>
                </div>
                <div class="admin-actions">
                    <button class="admin-small-btn" data-toggle-role="${user.email}">${user.role === 'admin' ? 'Quản trị' : 'Người dùng'}</button>
                    <button class="admin-delete-btn" data-delete-user="${user.email}">Xóa</button>
                </div>
            </div>
        `).join('') : '<div class="admin-empty">Chưa có tài khoản người dùng.</div>';

        // attach show password handlers
        userList.querySelectorAll('.show-pass-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
                const targetEmail = btn.getAttribute('data-email');
                const adminEmail = getCurrentUserEmail();
                const adminPwd = prompt('Vui lòng nhập mật khẩu quản trị để hiển thị mật khẩu người dùng:');
                if (!adminPwd) return;
                const adminUser = await findUserByEmail(adminEmail);
                if (!adminUser || adminUser.password !== adminPwd) {
                    alert('Mật khẩu quản trị không đúng.');
                    return;
                }
                // reveal password temporarily
                const maskedEl = userList.querySelector(`.masked-pass[data-email="${targetEmail}"]`);
                if (!maskedEl) return;
                const targetUser = users.find(u => u.email.toLowerCase() === targetEmail.toLowerCase());
                if (!targetUser) return;
                const orig = maskedEl.textContent;
                maskedEl.textContent = targetUser.password || '';
                setTimeout(() => { maskedEl.textContent = orig; }, 10000);
            });
        });
    }

    const sessionList = document.getElementById('session-list');
    if (sessionList) {
        sessionList.innerHTML = sessions.length ? sessions.map(session => `
            <div class="admin-list-item">
                <div>
                    <strong>${session.name}</strong>
                    <p>${session.user}</p>
                </div>
                <div class="admin-actions">
                    <span class="pill ${session.status === 'Live' ? 'ok' : 'warn'}">${session.status}</span>
                    <button class="admin-delete-btn" data-delete-session="${session.id}">Xóa</button>
                </div>
            </div>
        `).join('') : '<div class="admin-empty">Chưa có phiên stream.</div>';
    }

    const packageList = document.getElementById('package-list');
    if (packageList) {
        packageList.innerHTML = packages.length ? packages.map(pkg => `
            <div class="admin-list-item">
                <div>
                    <strong>${pkg.name}</strong>
                    <p>${pkg.price}</p>
                </div>
                <div class="admin-actions">
                    <span class="pill ${pkg.status === 'Active' ? 'ok' : 'warn'}">${pkg.status}</span>
                    <button class="admin-delete-btn" data-delete-package="${pkg.id}">Xóa</button>
                </div>
            </div>
        `).join('') : '<div class="admin-empty">Chưa có gói.</div>';
    }

    const maintenanceBtn = document.getElementById('maintenance-toggle');
    if (maintenanceBtn) {
        maintenanceBtn.textContent = maintenanceOn ? 'Tắt bảo trì' : 'Bật bảo trì';
        maintenanceBtn.onclick = () => {
            const nextValue = !getMaintenanceMode();
            setMaintenanceMode(nextValue);
            initAdminPage();
            alert(nextValue ? 'Đã bật chế độ bảo trì.' : 'Đã tắt chế độ bảo trì.');
        };
    }

    const registrationToggle = document.getElementById('registration-toggle');
    if (registrationToggle) {
        registrationToggle.textContent = getRegistrationEnabled() ? 'Tắt đăng ký' : 'Bật đăng ký';
        registrationToggle.onclick = () => {
            const nextValue = !getRegistrationEnabled();
            setRegistrationEnabled(nextValue);
            initAdminPage();
            alert(nextValue ? 'Đã bật đăng ký người dùng mới.' : 'Đã tắt đăng ký người dùng mới.');
        };
    }

    const resetVisitsBtn = document.getElementById('reset-visits');
    if (resetVisitsBtn) {
        resetVisitsBtn.onclick = async () => {
            const ok = confirm('Bạn có chắc muốn đặt lại toàn bộ lượt truy cập và danh sách người dùng về 0? (Mặc định tài khoản admin sẽ được giữ lại)');
            if (!ok) return;
            // Clear visit log
            saveVisitLog([]);
            // Clear users, but ensure default admin exists afterwards to avoid lockout
            try {
                await persistUsers([]);
                if (typeof ensureDefaultAdmin === 'function') {
                    await ensureDefaultAdmin();
                }
            } catch (e) {
                console.warn('Failed to reset users remotely, falling back to local clear.', e);
                saveStoredUsersLocal([]);
                if (typeof ensureDefaultAdmin === 'function') await ensureDefaultAdmin();
            }
            initAdminPage();
            alert('Lượt truy cập và người dùng đã được đặt lại (admin mặc định được giữ).');
        };
    }

    document.getElementById('game-form')?.addEventListener('submit', (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const title = form.gameTitle.value.trim();
        const desc = form.gameDesc.value.trim();
        const img = form.gameImg.value.trim();
        const category = form.gameCategory.value;
        if (!title || !desc) return;
        const updated = [...games, { id: `${Date.now()}`, title, desc, img: img || 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg', category }];
        saveAdminStorage(adminStorageKeys.games, updated);
        form.reset();
        initAdminPage();
    });

    document.getElementById('server-form')?.addEventListener('submit', (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = form.serverName.value.trim();
        const gpu = form.serverGpu.value.trim();
        const status = form.serverStatus.value;
        if (!name || !gpu) return;
        const updated = [...servers, { id: `${Date.now()}`, name, gpu, status }];
        saveAdminStorage(adminStorageKeys.servers, updated);
        form.reset();
        initAdminPage();
    });

    document.getElementById('user-form')?.addEventListener('submit', async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = form.userName.value.trim();
        const email = form.userEmail.value.trim();
        const password = form.userPassword.value;
        const role = form.userRole.value;
        if (!name || !email || !password) return;
        const exists = users.some(user => user.email.toLowerCase() === email.toLowerCase());
        if (exists) {
            alert('该邮箱已存在。');
            return;
        }
        const updated = [...users, { id: generateRandomId(), name, email, password, role }];
        await persistUsers(updated);
        form.reset();
        initAdminPage();
    });

    document.getElementById('session-form')?.addEventListener('submit', (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = form.sessionName.value.trim();
        const user = form.sessionUser.value.trim();
        const status = form.sessionStatus.value;
        if (!name || !user) return;
        const updated = [...sessions, { id: `${Date.now()}`, name, user, status }];
        saveAdminStorage(adminStorageKeys.sessions, updated);
        form.reset();
        initAdminPage();
    });

    document.getElementById('package-form')?.addEventListener('submit', (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = form.packageName.value.trim();
        const price = form.packagePrice.value.trim();
        const status = form.packageStatus.value;
        if (!name || !price) return;
        const updated = [...packages, { id: `${Date.now()}`, name, price, status }];
        saveAdminStorage(adminStorageKeys.packages, updated);
        form.reset();
        initAdminPage();
    });

    document.querySelectorAll('[data-delete-game]').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-delete-game');
            const updated = games.filter(game => game.id !== id);
            saveAdminStorage(adminStorageKeys.games, updated);
            initAdminPage();
        });
    });

    document.querySelectorAll('[data-delete-user]').forEach(button => {
        button.addEventListener('click', async () => {
            const email = button.getAttribute('data-delete-user');
            if (email === currentUser.email) {
                alert('Không thể xóa tài khoản đang đăng nhập.');
                initAdminPage();
                return;
            }
            const updated = users.filter(user => user.email.toLowerCase() !== email.toLowerCase());
            await persistUsers(updated);
            initAdminPage();
        });
    });

    document.querySelectorAll('[data-toggle-role]').forEach(button => {
        button.addEventListener('click', async () => {
            const email = button.getAttribute('data-toggle-role');
            if (email === currentUser.email) {
                alert('无法更改自己的角色。');
                return;
            }
            const updated = users.map(user => {
                if (user.email.toLowerCase() === email.toLowerCase()) {
                    user.role = user.role === 'admin' ? 'user' : 'admin';
                }
                return user;
            });
            await persistUsers(updated);
            initAdminPage();
        });
    });

    document.querySelectorAll('[data-delete-session]').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-delete-session');
            const updated = sessions.filter(session => session.id !== id);
            saveAdminStorage(adminStorageKeys.sessions, updated);
            initAdminPage();
        });
    });

    document.querySelectorAll('[data-delete-package]').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-delete-package');
            const updated = packages.filter(pkg => pkg.id !== id);
            saveAdminStorage(adminStorageKeys.packages, updated);
            initAdminPage();
        });
    });
}

function updateProfileData() {
    const username = localStorage.getItem('limoreUsername') || 'Khách';
    const userid = localStorage.getItem('limoreUserId') || generateRandomId();
    const role = getCurrentUserRole();

    localStorage.setItem('limoreUsername', username);
    localStorage.setItem('limoreUserId', userid);

    const profileName = document.getElementById('profile-username');
    const profileId = document.getElementById('profile-userid');
    const avatar = document.getElementById('profile-avatar');

    if (profileName) profileName.textContent = username;
    if (profileId) profileId.textContent = `ID:${userid}`;
    if (avatar) avatar.textContent = username.charAt(0).toUpperCase();
}

async function deleteAdminUser(email) {
    const currentEmail = getCurrentUserEmail();
    if (email === currentEmail) {
        alert('Không thể xóa tài khoản đang đăng nhập.');
        return;
    }
    const users = (await loadUsers()).filter(user => user.email.toLowerCase() !== email.toLowerCase());
    await persistUsers(users);
    initAdminPage();
}

function getMaintenanceMode() {
    return localStorage.getItem('appMaintenanceMode') === 'true';
}

function setMaintenanceMode(value) {
    localStorage.setItem('appMaintenanceMode', value ? 'true' : 'false');
    // Persist to server when available so maintenance affects all clients
    if (supportsRemoteUsers()) {
        apiPut('/maintenance', { maintenance: !!value }).catch(err => console.warn('Failed to update server maintenance:', err));
    }
    if (value) enforceMaintenanceUI();
}

function showMaintenanceScreen() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;
    const bottomNav = document.querySelector('.bottom-nav');
    if (bottomNav) {
        bottomNav.classList.add('hidden');
        bottomNav.style.display = 'none';
    }
    mainContent.classList.add('centered');
    mainContent.innerHTML = `
        <div style="padding: 28px; text-align: center; color: #e2e8f0; max-width:560px; margin:0 auto;">
            <h2 style="margin-bottom: 12px;">Hệ thống đang bảo trì</h2>
            <p style="margin-bottom: 16px; color: #94a3b8; font-size: 14px;">Vui lòng thử lại sau. Chỉ quản trị viên có thể truy cập trong thời gian bảo trì.</p>
            <button onclick="switchPage('login')" style="border:none; background:#2563eb; color:#fff; border-radius:16px; padding: 12px 18px; cursor:pointer; font-size:14px;">Quay lại đăng nhập</button>
        </div>
    `;
}

function enforceMaintenanceUI() {
    const currentUser = getCurrentUser();
    const maintenanceOn = getMaintenanceMode();
    if (!maintenanceOn || (currentUser && currentUser.role === 'admin')) return false;
    showMaintenanceScreen();
    return true;
}

function toggleMaintenanceMode() {
    const nextValue = !getMaintenanceMode();
    setMaintenanceMode(nextValue);
    initAdminPage();
    if (nextValue) {
        alert('Đã bật chế độ bảo trì. Người dùng mới sẽ không thể vào ứng dụng.');
    } else {
        alert('Đã tắt chế độ bảo trì. Ứng dụng đã phục hồi.');
    }
}

function getVisitLog() {
    try {
        return JSON.parse(localStorage.getItem('visitLog') || '[]');
    } catch (error) {
        return [];
    }
}

function saveVisitLog(log) {
    localStorage.setItem('visitLog', JSON.stringify(log));
}

function logVisit(visitor) {
    const log = getVisitLog();
    log.unshift(visitor);
    saveVisitLog(log.slice(0, 200));
}

function getCurrentVisitor() {
    const visits = getVisitLog();
    return visits[0] || {};
}

function getCurrentSessionCount() {
    const user = getCurrentUserEmail();
    return user ? 1 : 0;
}

function detectDeviceModel(userAgent) {
    const ua = userAgent.toLowerCase();
    if (/iphone/.test(ua)) {
        const match = ua.match(/iphone\s*([0-9]+)?/);
        return match && match[1] ? `iPhone ${match[1]}` : 'iPhone';
    }
    if (/ipad/.test(ua)) return 'iPad';
    if (/samsung|sm-/.test(ua)) return 'Samsung';
    if (/pixel/.test(ua)) return 'Google Pixel';
    if (/huawei/.test(ua)) return 'Huawei';
    if (/mi\s|redmi/.test(ua)) return 'Xiaomi';
    if (/oneplus/.test(ua)) return 'OnePlus';
    if (/android/.test(ua)) return 'Android Device';
    return 'Desktop';
}

function detectCountry(headers) {
    if (!headers) return 'Unknown';
    return headers['cf-ipcountry'] || headers['x-country'] || headers['x-appengine-country'] || 'Unknown';
}

async function fetchVisitorInfo() {
    const result = {
        ip: '127.0.0.1',
        country: 'Unknown',
        userAgent: navigator.userAgent || '',
    };
    if (!supportsRemoteUsers()) {
        return result;
    }
    try {
        const response = await apiGet('/admin-test');
        if (response && response.remoteAddress) {
            result.ip = response.remoteAddress;
        }
        if (response && response.userAgent) {
            result.userAgent = response.userAgent;
        }
        if (response && response.country) {
            result.country = response.country;
        }
    } catch (error) {
        console.warn('Không lấy được thông tin truy cập từ server:', error);
    }
    return result;
}

async function recordVisitorData(pageName) {
    if (getMaintenanceMode()) return;
    const now = new Date();
    const time = now.toLocaleString('zh-CN');
    const info = await fetchVisitorInfo();
    const deviceModel = detectDeviceModel(info.userAgent);
    const visitor = {
        ip: info.ip || '127.0.0.1',
        country: info.country || 'Unknown',
        device: deviceModel,
        time,
        page: pageName || 'unknown',
        user: getCurrentUserEmail() || '游客'
    };
    logVisit(visitor);
}

// Try to synchronize maintenance state from server into localStorage
async function syncMaintenanceFromServer() {
    if (!supportsRemoteUsers()) return;
    try {
        const res = await apiGet('/maintenance');
        if (res && typeof res.maintenance !== 'undefined') {
            localStorage.setItem('appMaintenanceMode', res.maintenance ? 'true' : 'false');
        }
    } catch (e) {
        // ignore network errors
    }
}

// Start polling server maintenance every 8 seconds and enforce maintenance UI
function startMaintenancePolling() {
    // initial sync
    syncMaintenanceFromServer();
    setInterval(async () => {
        try {
            await syncMaintenanceFromServer();
            enforceMaintenanceUI();
        } catch (e) {
            // ignore
        }
    }, 8000);
}

function generateRandomId() {
    const now = Date.now();
    const rand = Math.floor(Math.random() * 90000) + 10000;
    return `${now.toString().slice(-5)}${rand.toString().slice(0, 3)}`;
}

function isNotificationSupported() {
    return 'Notification' in window;
}

function showNotificationModal() {
    const modal = document.getElementById('notification-permission-modal');
    if (modal) modal.classList.add('active');
}

function hideNotificationModal() {
    const modal = document.getElementById('notification-permission-modal');
    if (modal) modal.classList.remove('active');
}

async function requestNotificationPermission() {
    hideNotificationModal();
    if (!isNotificationSupported()) {
        console.warn('Trình duyệt không hỗ trợ thông báo.');
        return;
    }
    try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            showSampleNotification('CloudZone đã bật thông báo', {
                body: 'Bạn sẽ nhận được cập nhật và ưu đãi trực tiếp từ ứng dụng.',
                icon: 'https://i.imgur.com/wfJugJr.png'
            });
        }
    } catch (error) {
        console.warn('Không thể yêu cầu quyền thông báo:', error);
    }
}

function showSampleNotification(title, options = {}) {
    if (!isNotificationSupported() || Notification.permission !== 'granted') return;
    try {
        new Notification(title, options);
    } catch (error) {
        console.warn('Hiển thị thông báo thất bại:', error);
    }
}

function promptNotificationPermission() {
    if (!isNotificationSupported()) return;
    if (Notification.permission === 'default') {
        showNotificationModal();
    }
}

function setupNotificationModal() {
    const allowBtn = document.getElementById('notification-allow-btn');
    const denyBtn = document.getElementById('notification-deny-btn');
    if (allowBtn) {
        allowBtn.addEventListener('click', requestNotificationPermission);
    }
    if (denyBtn) {
        denyBtn.addEventListener('click', hideNotificationModal);
    }
}

// --- Admin notifications: server-backed, polled by admin client ---
async function createServerNotification(title, body) {
    if (!supportsRemoteUsers()) return;
    try {
        const payload = { id: generateRandomId(), title, body, time: new Date().toISOString() };
        await apiPost('/notifications', payload);
    } catch (error) {
        console.warn('Failed to create server notification:', error);
    }
}

async function fetchServerNotifications() {
    if (!supportsRemoteUsers()) return [];
    try {
        const data = await apiGet('/notifications');
        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.warn('Failed to fetch notifications:', error);
        return [];
    }
}

function renderAdminNotifications(notifs) {
    const list = document.getElementById('admin-notifications-list');
    const countEl = document.getElementById('admin-notif-count');
    if (!list) return;
    if (!notifs || notifs.length === 0) {
        list.innerHTML = '<div style="color:#94a3b8;font-size:13px;padding:12px;text-align:center;">Chưa có thông báo.</div>';
        if (countEl) countEl.style.display = 'none';
        return;
    }
    list.innerHTML = notifs.map(n => `
        <div style="padding:8px;border-radius:8px;background:rgba(255,255,255,0.02);">
            <div style="font-weight:600;color:#eef2ff;">${n.title}</div>
            <div style="color:#94a3b8;font-size:13px;margin-top:6px;">${n.body || ''}</div>
            <div style="font-size:11px;color:#64748b;margin-top:8px;">${new Date(n.time || '').toLocaleString() || ''}</div>
        </div>
    `).join('');
    if (countEl) {
        countEl.textContent = notifs.length;
        countEl.style.display = notifs.length ? 'inline-block' : 'none';
    }
}

let _notifPollId = null;
async function pollAdminNotificationsOnce() {
    const notifs = await fetchServerNotifications();
    if (!notifs) return;
    renderAdminNotifications(notifs.slice(0, 30));
    // show browser notifications for newest one if allowed and unseen
    try {
        const lastSeen = localStorage.getItem('adminLastNotifTime') || '';
        const newest = notifs[0];
        if (newest && newest.time && newest.time !== lastSeen) {
            if (Notification && Notification.permission === 'granted') {
                showSampleNotification(newest.title, { body: newest.body || '', icon: 'https://i.imgur.com/wfJugJr.png' });
            }
            localStorage.setItem('adminLastNotifTime', newest.time);
        }
    } catch (e) { /* ignore */ }
}

function startNotificationPolling() {
    if (_notifPollId) return;
    pollAdminNotificationsOnce();
    _notifPollId = setInterval(pollAdminNotificationsOnce, 10000);
    const btn = document.getElementById('admin-notif-btn');
    const dropdown = document.getElementById('admin-notifications-dropdown');
    if (btn && dropdown) {
        btn.addEventListener('click', () => {
            dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
        });
        document.addEventListener('click', (ev) => {
            if (!btn.contains(ev.target) && !dropdown.contains(ev.target)) {
                dropdown.style.display = 'none';
            }
        });
    }
}

function stopNotificationPolling() {
    if (_notifPollId) {
        clearInterval(_notifPollId);
        _notifPollId = null;
    }
}

// Global polling for all clients to receive server notifications
let _globalNotifPoll = null;
async function pollGlobalNotificationsOnce() {
    const notifs = await fetchServerNotifications();
    if (!notifs || notifs.length === 0) return;
    try {
        const lastSeen = localStorage.getItem('lastNotifTime') || '';
        const newest = notifs[0];
        if (newest && newest.time && newest.time !== lastSeen) {
            if (Notification && Notification.permission === 'granted') {
                showSampleNotification(newest.title, { body: newest.body || '', icon: 'https://i.imgur.com/wfJugJr.png' });
            } else {
                // show in-app toast if permission not granted
                showInAppToast(newest.title + (newest.body ? (': ' + newest.body) : ''));
            }
            localStorage.setItem('lastNotifTime', newest.time);
        }
    } catch (e) { /* ignore */ }
}

function startGlobalNotificationPolling() {
    if (_globalNotifPoll) return;
    pollGlobalNotificationsOnce();
    _globalNotifPoll = setInterval(pollGlobalNotificationsOnce, 15000);
}

function stopGlobalNotificationPolling() {
    if (_globalNotifPoll) { clearInterval(_globalNotifPoll); _globalNotifPoll = null; }
}

function showInAppToast(text) {
    try {
        let el = document.getElementById('inapp-toast');
        if (!el) {
            el = document.createElement('div');
            el.id = 'inapp-toast';
            el.style.position = 'fixed';
            el.style.right = '16px';
            el.style.top = '16px';
            el.style.zIndex = '99999';
            document.body.appendChild(el);
        }
        const item = document.createElement('div');
        item.style.background = 'rgba(15,23,42,0.95)';
        item.style.color = '#e6eef8';
        item.style.padding = '10px 14px';
        item.style.borderRadius = '10px';
        item.style.boxShadow = '0 10px 30px rgba(2,6,23,0.6)';
        item.style.marginTop = '8px';
        item.textContent = text;
        el.appendChild(item);
        setTimeout(() => { item.style.opacity = '0'; setTimeout(() => item.remove(), 400); }, 6000);
    } catch (e) { console.warn(e); }
}

function setupAdminSendUI() {
    const sendBtn = document.getElementById('admin-send-notif-btn');
    const modal = document.getElementById('admin-send-notif-modal');
    const cancel = document.getElementById('admin-notif-cancel');
    const send = document.getElementById('admin-notif-send');
    const titleInput = document.getElementById('admin-notif-title');
    const bodyInput = document.getElementById('admin-notif-body');
    if (sendBtn) sendBtn.style.display = 'inline-block';
    if (sendBtn && modal) sendBtn.addEventListener('click', () => { modal.style.display = 'flex'; });
    if (cancel && modal) cancel.addEventListener('click', () => { modal.style.display = 'none'; });
    if (send && modal) send.addEventListener('click', async () => {
        const title = titleInput?.value?.trim();
        const body = bodyInput?.value?.trim();
        if (!title) { alert('Vui lòng nhập tiêu đề.'); return; }
        await createServerNotification(title, body);
        modal.style.display = 'none';
        titleInput.value = '';
        bodyInput.value = '';
        // refresh admin list
        try { await pollAdminNotificationsOnce(); } catch (e) {}
    });
}

// Packages: fetch from server and allow admin to edit two package prices
async function fetchPackages() {
    if (supportsRemoteUsers()) {
        try {
            const pkgs = await apiGet('/packages');
            if (Array.isArray(pkgs) && pkgs.length) {
                saveAdminStorage(adminStorageKeys.packages, pkgs);
                return pkgs;
            }
        } catch (e) {
            console.warn('fetchPackages failed', e);
        }
    }
    return readAdminStorage(adminStorageKeys.packages, []);
}

async function savePackagesToServer(pkgs) {
    try {
        if (supportsRemoteUsers()) {
            await apiPut('/packages', { packages: pkgs });
        }
    } catch (e) {
        console.warn('savePackagesToServer failed', e);
    }
    saveAdminStorage(adminStorageKeys.packages, pkgs);
}

function setupPackageEditor() {
    const editBtn = document.getElementById('edit-prices-btn');
    const modal = document.getElementById('admin-edit-prices-modal');
    const cancel = document.getElementById('pkg-edit-cancel');
    const saveBtn = document.getElementById('pkg-edit-save');
    const p1Label = document.getElementById('pkg1-label');
    const p1Price = document.getElementById('pkg1-price');
    const p2Label = document.getElementById('pkg2-label');
    const p2Price = document.getElementById('pkg2-price');

    if (!editBtn || !modal) return;
    editBtn.style.display = 'inline-block';
    editBtn.addEventListener('click', async () => {
        const pkgs = await fetchPackages();
        const pkg1 = pkgs[0] || {};
        const pkg2 = pkgs[1] || {};
        if (p1Label) p1Label.value = pkg1.label || pkg1.name || '';
        if (p1Price) p1Price.value = pkg1.price || '';
        if (p2Label) p2Label.value = pkg2.label || pkg2.name || '';
        if (p2Price) p2Price.value = pkg2.price || '';
        modal.style.display = 'flex';
    });
    if (cancel) cancel.addEventListener('click', () => { modal.style.display = 'none'; });
    if (saveBtn) saveBtn.addEventListener('click', async () => {
        const pkg1 = { id: 'pkg1', name: '云端电脑 1', label: p1Label.value.trim() || '云端电脑 1', price: (p1Price.value || '').trim() };
        const pkg2 = { id: 'pkg2', name: '云端电脑 2', label: p2Label.value.trim() || '云端电脑 2', price: (p2Price.value || '').trim() };
        const pkgs = [pkg1, pkg2];
        await savePackagesToServer(pkgs);
        modal.style.display = 'none';
        // update UI displays
        try { const priceDisplay = document.getElementById('price-display'); if (priceDisplay) priceDisplay.innerHTML = `${pkg1.label ? pkg1.label : '' ? pkg1.label : ''}`; } catch(e){}
    });
}

let currentPkgName = '云端电脑 1';
let currentPriceText = '99.000đ / 9 ngày';
let currentRawPrice = '99000';

function selectPackage(id, priceStr, pkgName) {
    currentPkgName = pkgName;
    currentPriceText = priceStr;
    if (id === 1) {
        currentRawPrice = '99000';
    } else if (id === 2) {
        currentRawPrice = '470000';
    } else {
        currentRawPrice = '0';
    }

    const pkg1 = document.getElementById('pkg-1');
    const pkg2 = document.getElementById('pkg-2');
    const pkg3 = document.getElementById('pkg-3');
    const check1 = document.getElementById('check-1');
    const check2 = document.getElementById('check-2');
    const check3 = document.getElementById('check-3');
    const priceDisplay = document.getElementById('price-display');

    if (id === 1) {
        if (pkg1) pkg1.style.border = '2px solid #6366f1';
        if (pkg2) pkg2.style.border = '1px solid #334155';
        if (pkg3) pkg3.style.border = '1px solid #334155';
        if (check1) {
            check1.style.background = '#6366f1';
            const icon = check1.querySelector('i');
            if (icon) icon.style.color = '#fff';
        }
        if (check2) {
            check2.style.background = 'transparent';
            const icon = check2.querySelector('i');
            if (icon) icon.style.color = 'transparent';
        }
        if (check3) {
            check3.style.background = 'transparent';
            const icon = check3.querySelector('i');
            if (icon) icon.style.color = 'transparent';
        }
        if (priceDisplay) priceDisplay.innerHTML = '云端电脑 1：<strong style="color: #facc15;">99.000đ / 9 ngày</strong>';
    } else if (id === 2) {
        if (pkg2) pkg2.style.border = '2px solid #6366f1';
        if (pkg1) pkg1.style.border = '1px solid #334155';
        if (pkg3) pkg3.style.border = '1px solid #334155';
        if (check2) {
            check2.style.background = '#6366f1';
            const icon = check2.querySelector('i');
            if (icon) icon.style.color = '#fff';
        }
        if (check1) {
            check1.style.background = 'transparent';
            const icon = check1.querySelector('i');
            if (icon) icon.style.color = 'transparent';
        }
        if (check3) {
            check3.style.background = 'transparent';
            const icon = check3.querySelector('i');
            if (icon) icon.style.color = 'transparent';
        }
        if (priceDisplay) priceDisplay.innerHTML = '云端电脑 2：<strong style="color: #facc15;">470.000đ (Gốc: 1.200.000đ)</strong>';
    } else if (id === 3) {
        if (pkg3) pkg3.style.border = '2px solid #6366f1';
        if (pkg1) pkg1.style.border = '1px solid #334155';
        if (pkg2) pkg2.style.border = '1px solid #334155';
        if (check3) {
            check3.style.background = '#6366f1';
            const icon = check3.querySelector('i');
            if (icon) icon.style.color = '#fff';
        }
        if (check1) {
            check1.style.background = 'transparent';
            const icon = check1.querySelector('i');
            if (icon) icon.style.color = 'transparent';
        }
        if (check2) {
            check2.style.background = 'transparent';
            const icon = check2.querySelector('i');
            if (icon) icon.style.color = 'transparent';
        }
        if (priceDisplay) priceDisplay.innerHTML = '免费体验包：<strong style="color: #facc15;">免费</strong>';
    }
}

const QR_DATA_URI = 'https://i.imgur.com/t88KJTx.png';

function ensureQRModal() {
    let modal = document.getElementById('qr-modal');
    if (modal) return modal;

    modal = document.createElement('div');
    modal.id = 'qr-modal';
    modal.className = 'area-modal';
    modal.innerHTML = `
        <div class="area-modal-panel">
            <h3 class="area-modal-title">Xác nhận gói</h3>
            <p class="area-modal-subtitle">Quét mã QR để tiếp tục trải nghiệm ngay.</p>
            <p class="area-modal-price" id="modal-package-name">云端电脑 1</p>
            <p class="area-modal-price" id="modal-price">99.000đ / 9 ngày</p>
            <img id="qr-image" src="${QR_DATA_URI}" alt="QR Code" style="width: 100%; max-width: 220px; margin: 0 auto 16px; display: block;" />
            <button type="button" class="area-modal-close" onclick="closeQRModal()">Đóng</button>
        </div>
    `;
    document.body.appendChild(modal);
    return modal;
}

function openQRModal() {
    if (currentRawPrice === '0' || currentPriceText === '免费' || currentPkgName === '免费体验包') {
        showFreeQueueModal();
        return;
    }

    const modal = ensureQRModal();
    const modalName = modal.querySelector('#modal-package-name');
    const modalPrice = modal.querySelector('#modal-price');
    const qrImg = modal.querySelector('#qr-image');

    if (modalName) modalName.innerText = currentPkgName || '云端电脑 1';
    if (modalPrice) modalPrice.innerText = currentPriceText || '99.000đ / 9 ngày';
    if (qrImg) {
        qrImg.src = QR_DATA_URI;
        qrImg.onerror = () => { qrImg.src = QR_DATA_URI; };
    }
    modal.classList.add('active');
}

function ensureFreeQueueModal() {
    let modal = document.getElementById('free-queue-modal');
    if (modal) return modal;

    modal = document.createElement('div');
    modal.id = 'free-queue-modal';
    modal.className = 'free-queue-modal';
    modal.innerHTML = `
        <div class="free-queue-panel">
            <div class="free-queue-title">Free Queue</div>
            <div class="free-queue-subtext">Gói miễn phí đang chờ mở phiên chơi riêng.</div>
            <div class="free-queue-status">Currently in line <span id="free-queue-position">55</span></div>
            <button type="button" class="free-queue-cancel" onclick="closeFreeQueue()">Cancel queue</button>
        </div>
    `;
    document.body.appendChild(modal);
    return modal;
}

function showFreeQueueModal() {
    const modal = ensureFreeQueueModal();
    const position = modal.querySelector('#free-queue-position');
    if (position) {
        const randomPosition = Math.floor(Math.random() * 18 + 28);
        position.innerText = randomPosition > 0 ? randomPosition : 'Ready';
    }
    const status = modal.querySelector('.free-queue-status');
    if (status) {
        const currentText = status.textContent || '';
        if ((position && position.innerText === 'Ready') || currentText.includes('Ready')) {
            status.innerHTML = 'Ready to start your free session';
        }
    }
    modal.classList.add('active');
    
}

function closeFreeQueue() {
    const modal = document.getElementById('free-queue-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// (animation helpers removed — restored original static position behavior)

function closeQRModal() {
    const modal = document.getElementById('qr-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function goToAreaWithQR() {
    switchPage('area');
}

window.onload = async function() {
    ensureDefaultAdmin();
    setupNotificationModal();
    try { startMaintenancePolling(); } catch(e) { console.warn('Maintenance polling failed', e); }
    applyLanguage(getAppLanguage());
    // If maintenance active on server and user is not admin, force show maintenance
    try {
        await syncMaintenanceFromServer();
    } catch (e) {
        console.warn('Initial maintenance sync failed', e);
    }

    const currentUser = getCurrentUser();
    if (getMaintenanceMode() && (!currentUser || currentUser.role !== 'admin')) {
        showMaintenanceScreen();
        return;
    }

    if (currentUser) {
        setLoggedInSession(currentUser);
        enterApp();
        promptNotificationPermission();
        try { startGlobalNotificationPolling(); } catch(e) { console.warn(e); }
        try {
            fetchPackages().then(pkgs => {
                if (pkgs && pkgs[0]) {
                    currentPkgName = pkgs[0].name || currentPkgName;
                    currentPriceText = pkgs[0].label || currentPriceText;
                    currentRawPrice = pkgs[0].price || currentRawPrice;
                    const priceDisplay = document.getElementById('price-display');
                    if (priceDisplay) priceDisplay.innerHTML = `${pkgs[0].label || currentPriceText}`;
                }
            }).catch(()=>{});
        } catch(e) { console.warn('fetchPackages init failed', e); }
    } else {
        switchPage('login');
    }
};