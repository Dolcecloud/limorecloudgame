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

function supportsRemoteUsers() {
    return typeof apiGet === 'function' && typeof apiPut === 'function' && typeof apiPost === 'function' && typeof apiDelete === 'function';
}

async function loadUsers() {
    if (supportsRemoteUsers()) {
        try {
            return await apiGet('/users');
        } catch (error) {
            console.warn('Remote user API unavailable, using local fallback.', error);
        }
    }
    return getStoredUsersLocal();
}

async function persistUsers(users) {
    if (supportsRemoteUsers()) {
        try {
            await apiPut('/users', { users });
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
    return email ? findUserByEmail(email) : null;
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
        showAlert('auth-alert-login', '请输入邮箱和密码。');
        return;
    }
    const user = await findUserByEmail(email);
    if (!user) {
        showAlert('auth-alert-login', '账号未注册，请先注册。');
        return;
    }
    if (user.password !== password) {
        showAlert('auth-alert-login', '密码错误，请重试。');
        return;
    }
    if (getMaintenanceMode() && user.role !== 'admin') {
        showAlert('auth-alert-login', '系统维护中，仅管理员可访问。', 'error');
        return;
    }
    setLoggedInSession(user);
    showAlert('auth-alert-login', '登录成功！', 'success');
    setTimeout(enterApp, 700);
}

function openRegisterPage() {
    setAuthTab('register');
}

async function createAccountPage() {
    if (getMaintenanceMode()) {
        showAlert('auth-alert-register', '系统维护中，暂时无法注册。');
        return;
    }
    if (!getRegistrationEnabled()) {
        showAlert('auth-alert-register', '管理员已关闭新注册。', 'error');
        return;
    }
    const name = document.getElementById('register-name')?.value.trim();
    const email = document.getElementById('register-email')?.value.trim();
    const password = document.getElementById('register-password')?.value;
    const confirm = document.getElementById('register-confirm')?.value;
    if (!name || !email || !password || !confirm) {
        showAlert('auth-alert-register', '请填写完整信息。');
        return;
    }
    if (password !== confirm) {
        showAlert('auth-alert-register', '确认密码不匹配。');
        return;
    }
    const existing = await findUserByEmail(email);
    if (existing) {
        showAlert('auth-alert-register', '该邮箱已注册，请直接登录。');
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
    setLoggedInSession(newUser);
    showAlert('auth-alert-register', '注册成功！您已登录。', 'success');
    setTimeout(enterApp, 700);
}

function continueAsGuest() {
    if (getMaintenanceMode()) {
        alert('系统维护中，暂时无法以游客身份进入。');
        return;
    }
    localStorage.setItem('limoreUsername', '游客');
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

    const navs = ['home', 'games', 'cloud', 'profile'];
    
    navs.forEach(nav => {
        const el = document.getElementById(`nav-${nav}`);
        if (el) {
            el.style.color = (nav === pageName) ? '#facc15' : '#94a3b8';
        }
    });

    const currentUser = getCurrentUser();
    const maintenanceOn = getMaintenanceMode();
    const bottomNav = document.querySelector('.bottom-nav');
    if (bottomNav) {
        const showNav = pageName !== 'login';
        bottomNav.classList.toggle('hidden', !showNav);
        bottomNav.style.display = showNav ? 'flex' : 'none';
    }
    if (pageName === 'login') {
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
    fetch(pageUrl)
        .then(response => {
            if (!response.ok) throw new Error("无法加载页面");
            return response.text();
        })
        .then(html => {
            document.getElementById('main-content').innerHTML = html;
            if (pageName === 'games' || pageName === 'home') {
                initGameInterface();
            } else if (pageName === 'area') {
                initAreaPage();
            }
            if (pageName === 'profile') {
                updateProfileData();
            }
            if (pageName === 'admin') {
                initAdminPage();
            }
        })
        .catch(error => {
            console.error("Lỗi load trang:", error);
            const isFileProtocol = location.protocol === 'file:';
            document.getElementById('main-content').innerHTML = isFileProtocol
                ? `<div style="color: #ef4444; text-align:center; padding: 20px; font-size: 13px;">请通过本地服务器打开应用，而不是直接打开文件。可使用 <strong>python -m http.server</strong> 或部署到 Web 服务器。</div>`
                : `<div style="color: #ef4444; text-align:center; padding: 20px; font-size: 13px;">内容正在更新... 如果问题仍然存在，请检查页面路径和服务器配置。</div>`;
        });
}

// Khởi tạo giao diện game, menu danh mục bên trái và tìm kiếm
function initGameInterface() {
    const container = document.getElementById("game-list-container");
    if (!container) return;

    const buttons = document.querySelectorAll(".cat-btn");
    const searchInput = document.getElementById("game-search-input");
    let currentCategory = "recent";
    const catalog = getGameCatalogData();

    function renderGameList(list) {
        if (!list || list.length === 0) {
            container.innerHTML = `<div style="color: #94a3b8; font-size: 12px; text-align: center; padding: 20px;">未找到游戏</div>`;
            return;
        }

        container.innerHTML = list.map(game => `
            <div style="display: flex; gap: 10px; align-items: center; background: rgba(255,255,255,0.03); padding: 8px; border-radius: 10px; cursor: pointer; border: 1px solid rgba(255,255,255,0.06); transition: 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.07)'" onmouseout="this.style.background='rgba(255,255,255,0.03)'">
                <img src="${game.img}" style="width: 90px; height: 50px; border-radius: 6px; object-fit: cover; flex-shrink: 0;" alt="${game.title}" onerror="this.onerror=null; this.src='https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg'">
                <div style="flex: 1; overflow: hidden;">
                    <h4 style="color: #f1f5f9; font-size: 12px; font-weight: 600; margin: 0 0 3px 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${game.title}</h4>
                    <p style="color: #94a3b8; font-size: 10px; margin: 0; line-height: 1.3; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${game.desc}</p>
                </div>
            </div>
        `).join("");
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

    if (pkg1) {
        pkg1.onclick = () => selectPackage(1, '99.000đ / 9 ngày', '云端电脑 1');
    }
    if (pkg2) {
        pkg2.onclick = () => selectPackage(2, '470.000đ (Gốc: 1.200.000đ)', '云端电脑 2');
    }
}

function initAdminPage() {
    const currentUser = getCurrentUser();
    if (!currentUser || currentUser.role !== 'admin') return;

    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle) pageTitle.textContent = '总览';

    const navButtons = document.querySelectorAll('.admin-nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            navButtons.forEach(item => item.classList.remove('active'));
            btn.classList.add('active');
            const tab = btn.getAttribute('data-tab');
            document.querySelectorAll('.admin-section').forEach(section => section.classList.toggle('active', section.id === `tab-${tab}`));
            if (pageTitle) {
                const labels = {
                    dashboard: '总览',
                    apps: '应用/游戏库管理',
                    servers: '服务器 & GPU 节点',
                    users: '用户管理',
                    sessions: '实时流会话',
                    packages: '套餐与支付',
                    settings: '系统配置'
                };
                pageTitle.textContent = labels[tab] || 'Admin';
            }
        });
    });

    const users = getStoredUsers();
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
    setText('dashboard-maintenance', maintenanceOn ? '开启' : '关闭');
    setText('dashboard-games', games.length);
    setText('dashboard-sessions', sessions.length);

    const recentList = document.getElementById('dashboard-recent');
    if (recentList) {
        recentList.innerHTML = visits.slice(0, 5).map(item => `
            <div class="admin-list-item">
                <div>
                    <strong>${item.user || '游客'}</strong>
                    <p>${item.device || '未知'} • ${item.time || ''}</p>
                </div>
                <span>${item.country || '未知'}</span>
            </div>
        `).join('');
    }

    const gameList = document.getElementById('game-list');
    if (gameList) {
        gameList.innerHTML = games.length ? games.map(game => `
            <div class="admin-list-item">
                <div>
                    <strong>${game.title}</strong>
                    <p>${game.desc}</p>
                </div>
                <button class="admin-delete-btn" data-delete-game="${game.id}">删除</button>
            </div>
        `).join('') : '<div class="admin-empty">当前没有游戏。</div>';
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
        `).join('') : '<div class="admin-empty">当前没有服务器节点。</div>';
    }

    const userList = document.getElementById('user-list');
    if (userList) {
        userList.innerHTML = users.length ? users.map(user => `
            <div class="admin-list-item">
                <div>
                    <strong>${user.name}</strong>
                    <p>${user.email}</p>
                </div>
                <div class="admin-actions">
                    <button class="admin-small-btn" data-toggle-role="${user.email}">${user.role === 'admin' ? 'Admin' : 'User'}</button>
                    <button class="admin-delete-btn" data-delete-user="${user.email}">删除</button>
                </div>
            </div>
        `).join('') : '<div class="admin-empty">当前没有用户账户。</div>';
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
                    <button class="admin-delete-btn" data-delete-session="${session.id}">删除</button>
                </div>
            </div>
        `).join('') : '<div class="admin-empty">当前没有流会话。</div>';
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
                    <button class="admin-delete-btn" data-delete-package="${pkg.id}">删除</button>
                </div>
            </div>
        `).join('') : '<div class="admin-empty">当前没有套餐。</div>';
    }

    const maintenanceBtn = document.getElementById('maintenance-toggle');
    if (maintenanceBtn) {
        maintenanceBtn.textContent = maintenanceOn ? '关闭维护' : '开启维护';
        maintenanceBtn.onclick = () => {
            const nextValue = !getMaintenanceMode();
            setMaintenanceMode(nextValue);
            initAdminPage();
            alert(nextValue ? '维护模式已开启。' : '维护模式已关闭。');
        };
    }

    const registrationToggle = document.getElementById('registration-toggle');
    if (registrationToggle) {
        registrationToggle.textContent = getRegistrationEnabled() ? '关闭注册' : '开启注册';
        registrationToggle.onclick = () => {
            const nextValue = !getRegistrationEnabled();
            setRegistrationEnabled(nextValue);
            initAdminPage();
            alert(nextValue ? '新用户注册已开启。' : '新用户注册已关闭。');
        };
    }

    const resetVisitsBtn = document.getElementById('reset-visits');
    if (resetVisitsBtn) {
        resetVisitsBtn.onclick = () => {
            if (!confirm('是否确定将访问计数重置为0？')) return;
            saveVisitLog([]);
            initAdminPage();
            alert('访问计数已重置为0。');
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

    document.getElementById('user-form')?.addEventListener('submit', (event) => {
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
        saveStoredUsers(updated);
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
        button.addEventListener('click', () => {
            const email = button.getAttribute('data-delete-user');
            if (email === currentUser.email) {
                alert('无法删除当前登录账户。');
                initAdminPage();
                return;
            }
            const updated = users.filter(user => user.email.toLowerCase() !== email.toLowerCase());
            saveStoredUsers(updated);
            initAdminPage();
        });
    });

    document.querySelectorAll('[data-toggle-role]').forEach(button => {
        button.addEventListener('click', () => {
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
            saveStoredUsers(updated);
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
    const username = localStorage.getItem('limoreUsername') || '游客';
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

function deleteAdminUser(email) {
    const currentEmail = getCurrentUserEmail();
    if (email === currentEmail) {
        alert('无法删除当前登录账户。');
        return;
    }
    const users = getStoredUsers().filter(user => user.email.toLowerCase() !== email.toLowerCase());
    saveStoredUsers(users);
    initAdminPage();
}

function getMaintenanceMode() {
    return localStorage.getItem('appMaintenanceMode') === 'true';
}

function setMaintenanceMode(value) {
    localStorage.setItem('appMaintenanceMode', value ? 'true' : 'false');
}

function toggleMaintenanceMode() {
    const nextValue = !getMaintenanceMode();
    setMaintenanceMode(nextValue);
    initAdminPage();
    if (nextValue) {
        alert('维护模式已开启。新用户将无法进入应用。');
    } else {
        alert('维护模式已关闭。应用已恢复正常。');
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
    const existingIndex = log.findIndex(entry => entry.ip === visitor.ip);
    if (existingIndex !== -1) {
        log.splice(existingIndex, 1);
    }
    log.unshift(visitor);
    saveVisitLog(log.slice(0, 50));
}

function getCurrentVisitor() {
    const visits = getVisitLog();
    return visits[0] || {};
}

function getCurrentSessionCount() {
    const user = getCurrentUserEmail();
    return user ? 1 : 0;
}

function recordVisitorData(pageName) {
    if (getMaintenanceMode()) return;
    const now = new Date();
    const time = now.toLocaleString('zh-CN');
    const device = navigator.userAgent.includes('Mobile') ? 'Mobile' : 'Desktop';
    const visitor = {
        ip: '127.0.0.1',
        country: '中国',
        device,
        time,
        page: pageName || 'unknown',
        user: getCurrentUserEmail() || '游客'
    };
    logVisit(visitor);
}

function generateRandomId() {
    const now = Date.now();
    const rand = Math.floor(Math.random() * 90000) + 10000;
    return `${now.toString().slice(-5)}${rand.toString().slice(0, 3)}`;
}

let currentPkgName = '云端电脑 1';
let currentPriceText = '99.000đ / 9 ngày';
let currentRawPrice = '99000';

function selectPackage(id, priceStr, pkgName) {
    currentPkgName = pkgName;
    currentPriceText = priceStr;
    currentRawPrice = id === 1 ? '99000' : '470000';

    const pkg1 = document.getElementById('pkg-1');
    const pkg2 = document.getElementById('pkg-2');
    const check1 = document.getElementById('check-1');
    const check2 = document.getElementById('check-2');
    const priceDisplay = document.getElementById('price-display');

    if (id === 1) {
        if (pkg1) pkg1.style.border = '2px solid #6366f1';
        if (pkg2) pkg2.style.border = '1px solid #334155';
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
        if (priceDisplay) priceDisplay.innerHTML = '云端电脑 1：<strong style="color: #facc15;">99.000đ / 9 ngày</strong>';
    } else {
        if (pkg2) pkg2.style.border = '2px solid #6366f1';
        if (pkg1) pkg1.style.border = '1px solid #334155';
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
        if (priceDisplay) priceDisplay.innerHTML = '云端电脑 2：<strong style="color: #facc15;">470.000đ (Gốc: 1.200.000đ)</strong>';
    }
}

function openQRModal() {
    const modalName = document.getElementById('modal-package-name');
    const modalPrice = document.getElementById('modal-price');
    const qrImg = document.getElementById('qr-image');
    const modal = document.getElementById('qr-modal');

    if (modalName) modalName.innerText = currentPkgName;
    if (modalPrice) modalPrice.innerText = currentPriceText;
    if (qrImg) qrImg.src = `https://api.vietqr.io/image/970422-0382838383-d97X3J9.jpg?accountName=CLOUD%20GAMING&amount=${currentRawPrice}&addInfo=${encodeURIComponent('支付 ' + currentPkgName)}`;
    if (modal) modal.style.display = 'flex';
}

function closeQRModal() {
    const modal = document.getElementById('qr-modal');
    if (modal) modal.style.display = 'none';
}

window.onload = function() {
    ensureDefaultAdmin();
    const currentUser = getCurrentUser();
    if (currentUser) {
        setLoggedInSession(currentUser);
        enterApp();
    } else {
        switchPage('login');
    }
};