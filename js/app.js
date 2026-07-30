// Cơ sở dữ liệu game (đã được thêm 5 game mới vào danh mục 'recent' cho trang chủ)
const gameDatabase = {
    recent: [
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg", title: "Baldur's Gate 3", desc: "Gather your party and return to the Forgotten Realms" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg", title: "Elden Ring", desc: "Rise, Tarnished, and be guided by grace" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg", title: "Cyberpunk 2077", desc: "Open-world action-adventure RPG in Night City" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg", title: "Black Myth: Wukong", desc: "Action RPG rooted in Chinese mythology and Journey to the West" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/546560/header.jpg", title: "Half-Life: Alyx", desc: "Valve's return to the Half-Life series in VR" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg", title: "Rust", desc: "The only aim in Rust is to survive through gathering and building" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg", title: "Stardew Valley", desc: "Open-ended country-life RPG where you grow your farm" }
    ],
    act: [
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg", title: "Grand Theft Auto V", desc: "Explore the stunning world of Los Santos and Blaine County" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg", title: "Red Dead Redemption 2", desc: "An epic tale of life in America's unforgiving heartland" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1088850/header.jpg", title: "Cyber Hunter", desc: "Survival battle royale on a futuristic sci-fi battlefield" }
    ],
    fps: [
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg", title: "Counter-Strike 2", desc: "The largest technical leap in Counter-Strike's history" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/header.jpg", title: "Apex Legends", desc: "Conquer with character in a free-to-play hero shooter" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/578080/header.jpg", title: "PUBG: BATTLEGROUNDS", desc: "Land, loot and outwit your opponents to survive" }
    ],
    sport: [
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/header.jpg", title: "EA SPORTS FC 24", desc: "The most authentic football gaming experience with HyperMotionV" },
        { img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2338770/header.jpg", title: "NBA 2K24", desc: "Hoop it up and experience pure basketball action" }
    ]
};


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

function getStoredUsers() {
    try {
        const raw = localStorage.getItem(ACCOUNT_STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (error) {
        return [];
    }
}

function saveStoredUsers(users) {
    localStorage.setItem(ACCOUNT_STORAGE_KEY, JSON.stringify(users));
}

function ensureDefaultAdmin() {
    const users = getStoredUsers();
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
        saveStoredUsers(users);
    }
}

function findUserByEmail(email) {
    if (!email) return null;
    const users = getStoredUsers();
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
    const loginPanel = document.getElementById('login-panel');
    const registerPanel = document.getElementById('register-panel');
    if (loginTab && registerTab && loginPanel && registerPanel) {
        loginTab.classList.toggle('active', tab === 'login');
        registerTab.classList.toggle('active', tab === 'register');
        loginPanel.classList.toggle('active', tab === 'login');
        registerPanel.classList.toggle('active', tab === 'register');
    }
}

function loginWithEmailPage() {
    const email = document.getElementById('login-email')?.value.trim();
    const password = document.getElementById('login-password')?.value;
    if (!email || !password) {
        showAlert('auth-alert-login', 'Vui lòng nhập email và mật khẩu.');
        return;
    }
    const user = findUserByEmail(email);
    if (!user) {
        showAlert('auth-alert-login', 'Tài khoản chưa đăng ký. Vui lòng đăng ký trước.');
        return;
    }
    if (user.password !== password) {
        showAlert('auth-alert-login', 'Mật khẩu không đúng. Vui lòng thử lại.');
        return;
    }
    if (getMaintenanceMode() && user.role !== 'admin') {
        showAlert('auth-alert-login', 'Hệ thống đang bảo trì. Chỉ admin mới có thể truy cập.', 'error');
        return;
    }
    setLoggedInSession(user);
    showAlert('auth-alert-login', 'Đăng nhập thành công!', 'success');
    setTimeout(enterApp, 700);
}

function openRegisterPage() {
    setAuthTab('register');
}

function createAccountPage() {
    if (getMaintenanceMode()) {
        showAlert('auth-alert-register', 'Hệ thống đang bảo trì, không thể đăng ký mới vào lúc này.');
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
        showAlert('auth-alert-register', 'Mật khẩu xác nhận không khớp.');
        return;
    }
    if (findUserByEmail(email)) {
        showAlert('auth-alert-register', 'Email đã được đăng ký. Vui lòng đăng nhập.');
        return;
    }
    const users = getStoredUsers();
    const newUser = {
        id: generateRandomId(),
        name,
        email,
        password,
        role: 'user'
    };
    users.push(newUser);
    saveStoredUsers(users);
    setLoggedInSession(newUser);
    showAlert('auth-alert-register', 'Đăng ký thành công! Bạn đã được đăng nhập.', 'success');
    setTimeout(enterApp, 700);
}

function continueAsGuest() {
    if (getMaintenanceMode()) {
        alert('Hệ thống đang bảo trì. Bạn không thể vào dưới dạng khách lúc này.');
        return;
    }
    localStorage.setItem('limoreUsername', 'Guest');
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
    if (maintenanceOn && pageName !== 'login' && (!currentUser || currentUser.role !== 'admin')) {
        document.getElementById('main-content').innerHTML = `
            <div style="padding: 28px; text-align: center; color: #e2e8f0;">
                <h2 style="margin-bottom: 12px;">Hệ thống đang được bảo trì</h2>
                <p style="margin-bottom: 16px; color: #94a3b8; font-size: 14px;">Vui lòng quay lại sau. Chỉ admin mới được truy cập khi bảo trì.</p>
                <button onclick="switchPage('login')" style="border:none; background:#2563eb; color:#fff; border-radius:16px; padding: 12px 18px; cursor:pointer; font-size:14px;">Quay về đăng nhập</button>
            </div>
        `;
        return;
    }

    if (pageName === 'admin' && (!currentUser || currentUser.role !== 'admin')) {
        document.getElementById('main-content').innerHTML = `
            <div style="padding: 28px; text-align: center; color: #e2e8f0;">
                <h2 style="margin-bottom: 12px;">Quyền truy cập bị từ chối</h2>
                <p style="margin-bottom: 16px; color: #94a3b8; font-size: 14px;">Chỉ admin mới có thể truy cập trang quản trị.</p>
                <button onclick="switchPage('profile')" style="border:none; background:#2563eb; color:#fff; border-radius:16px; padding: 12px 18px; cursor:pointer; font-size:14px;">Quay lại Me</button>
            </div>
        `;
        return;
    }

    fetch(`pages/${pageName}.html`)
        .then(response => {
            if (!response.ok) throw new Error("Không thể tải trang");
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
            document.getElementById('main-content').innerHTML = `<div style="color: #ef4444; text-align:center; padding: 20px; font-size: 13px;">Đang cập nhật nội dung...</div>`;
        });
}

// Khởi tạo giao diện game, menu danh mục bên trái và tìm kiếm
function initGameInterface() {
    const container = document.getElementById("game-list-container");
    if (!container) return;

    const buttons = document.querySelectorAll(".cat-btn");
    const searchInput = document.getElementById("game-search-input");
    let currentCategory = "recent";

    function renderGameList(list) {
        if (!list || list.length === 0) {
            container.innerHTML = `<div style="color: #94a3b8; font-size: 12px; text-align: center; padding: 20px;">Không tìm thấy game nào</div>`;
            return;
        }

        container.innerHTML = list.map(game => `
            <div style="display: flex; gap: 10px; align-items: center; background: rgba(255,255,255,0.03); padding: 8px; border-radius: 10px; cursor: pointer; border: 1px solid rgba(255,255,255,0.06); transition: 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.07)'" onmouseout="this.style.background='rgba(255,255,255,0.03)'">
                <img src="${game.img}" style="width: 90px; height: 50px; border-radius: 6px; object-fit: cover; flex-shrink: 0;" alt="${game.title}" onerror="this.src='https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg'">
                <div style="flex: 1; overflow: hidden;">
                    <h4 style="color: #f1f5f9; font-size: 12px; font-weight: 600; margin: 0 0 3px 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${game.title}</h4>
                    <p style="color: #94a3b8; font-size: 10px; margin: 0; line-height: 1.3; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${game.desc}</p>
                </div>
            </div>
        `).join("");
    }

    renderGameList(gameDatabase[currentCategory]);

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
            renderGameList(gameDatabase[currentCategory]);
        };
    });

    if (searchInput) {
        searchInput.oninput = function() {
            const keyword = this.value.toLowerCase().trim();
            const activeList = gameDatabase[currentCategory] || [];
            
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
        pkg1.onclick = () => selectPackage(1, '99.000đ / 9 ngày', 'Pc cloud 1');
    }
    if (pkg2) {
        pkg2.onclick = () => selectPackage(2, '470.000đ (Gốc: 1.200.000đ)', 'Pc cloud 2');
    }
}

function initAdminPage() {
    const list = document.getElementById('admin-user-list');
    const totalUsers = document.getElementById('admin-total-users');
    const totalAdmins = document.getElementById('admin-total-admins');
    const searchInput = document.getElementById('admin-search');
    const maintenanceStatus = document.getElementById('admin-maintenance-status');
    const totalVisits = document.getElementById('admin-total-visits');
    const currentUsersCount = document.getElementById('admin-current-users');
    const currentVisitorIp = document.getElementById('current-visitor-ip');
    const currentVisitorCountry = document.getElementById('current-visitor-country');
    const currentVisitorDevice = document.getElementById('current-visitor-device');
    const currentVisitorTime = document.getElementById('current-visitor-time');

    if (!list) return;
    const users = getStoredUsers();
    const currentEmail = getCurrentUserEmail();
    const filter = searchInput?.value.trim().toLowerCase() || '';

    const filtered = users.filter(user => {
        if (!filter) return true;
        return user.email.toLowerCase().includes(filter) || user.name.toLowerCase().includes(filter);
    });

    if (totalUsers) totalUsers.textContent = users.length;
    if (totalAdmins) totalAdmins.textContent = users.filter(user => user.role === 'admin').length;
    if (totalVisits) totalVisits.textContent = getVisitLog().length;
    if (currentUsersCount) currentUsersCount.textContent = getCurrentSessionCount();

    const currentVisitor = getCurrentVisitor();
    if (currentVisitorIp) currentVisitorIp.textContent = currentVisitor.ip || 'Chưa có';
    if (currentVisitorCountry) currentVisitorCountry.textContent = currentVisitor.country || 'Chưa có';
    if (currentVisitorDevice) currentVisitorDevice.textContent = currentVisitor.device || 'Chưa có';
    if (currentVisitorTime) currentVisitorTime.textContent = currentVisitor.time || 'Chưa có';

    const maintenanceOn = getMaintenanceMode();
    if (maintenanceStatus) {
        maintenanceStatus.textContent = maintenanceOn ? 'ON' : 'OFF';
        maintenanceStatus.style.color = maintenanceOn ? '#22c55e' : '#facc15';
    }

    if (filtered.length === 0) {
        list.innerHTML = `<div style="color: #94a3b8; font-size: 12px;">Không tìm thấy tài khoản nào.</div>`;
        return;
    }

    list.innerHTML = filtered.map(user => `
        <div style="display: grid; gap: 10px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 14px;">
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 10px; flex-wrap: wrap;">
                <div>
                    <div style="font-size: 14px; font-weight: 800; color: #f1f5f9;">${user.name}</div>
                    <div style="font-size: 11px; color: #94a3b8;">${user.email}</div>
                </div>
                <div style="text-align: right; min-width: 100px;">
                    <div style="font-size: 11px; color: #cbd5e1;">ID: ${user.id}</div>
                    <div style="font-size: 11px; color: ${user.role === 'admin' ? '#facc15' : '#94a3b8'};">${user.role.toUpperCase()}</div>
                </div>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: flex-end;">
                ${user.email === currentEmail ? '<button disabled style="border:none; background: rgba(255,255,255,0.1); color:#94a3b8; border-radius:14px; padding:8px 12px; font-size:12px;">Đang đăng nhập</button>' : '<button onclick="deleteAdminUser(\'' + user.email + '\')" style="border:none; background:#ef4444; color:#fff; border-radius:14px; padding:8px 12px; font-size:12px; cursor:pointer;">Xóa</button>'}
            </div>
        </div>
    `).join('');
}

function updateProfileData() {
    const username = localStorage.getItem('limoreUsername') || 'Guest';
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
        alert('Không thể xóa tài khoản đang đăng nhập.');
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
        alert('Chế độ bảo trì đã bật. Người dùng mới sẽ không thể vào app.');
    } else {
        alert('Chế độ bảo trì đã tắt. App hoạt động bình thường.');
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

function recordVisitorData() {
    if (getMaintenanceMode()) return;
    const now = new Date();
    const time = now.toLocaleString('vi-VN');
    const device = navigator.userAgent.includes('Mobile') ? 'Mobile' : 'Desktop';
    const visitor = {
        ip: '127.0.0.1',
        country: 'Việt Nam',
        device,
        time,
        user: getCurrentUserEmail() || 'Khách'
    };
    logVisit(visitor);
}

function generateRandomId() {
    const now = Date.now();
    const rand = Math.floor(Math.random() * 90000) + 10000;
    return `${now.toString().slice(-5)}${rand.toString().slice(0, 3)}`;
}

let currentPkgName = 'Pc cloud 1';
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
        if (priceDisplay) priceDisplay.innerHTML = 'Pc cloud 1 : <strong style="color: #facc15;">99.000đ / 9 ngày</strong>';
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
        if (priceDisplay) priceDisplay.innerHTML = 'Pc cloud 2 : <strong style="color: #facc15;">470.000đ (Gốc: 1.200.000đ)</strong>';
    }
}

function openQRModal() {
    const modalName = document.getElementById('modal-package-name');
    const modalPrice = document.getElementById('modal-price');
    const qrImg = document.getElementById('qr-image');
    const modal = document.getElementById('qr-modal');

    if (modalName) modalName.innerText = currentPkgName;
    if (modalPrice) modalPrice.innerText = currentPriceText;
    if (qrImg) qrImg.src = `https://api.vietqr.io/image/970422-0382838383-d97X3J9.jpg?accountName=CLOUD%20GAMING&amount=${currentRawPrice}&addInfo=${encodeURIComponent('Thanh toan ' + currentPkgName)}`;
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