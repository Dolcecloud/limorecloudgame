Deploy lên GitHub + Render — hướng dẫn nhanh

Mục tiêu: tạo repo trên GitHub, push mã nguồn, và tạo service trên Render để triển khai tự động.

1) Tạo repository trên GitHub
- Vào https://github.com/new
- Tên repo: `cloudzone` (hoặc tên bạn muốn)
- Khởi tạo repo (không cần README nếu bạn đã có local files)

2) Thêm remote và push từ máy local
```bash
cd C:\Users\hotom\OneDrive\Desktop\cloudzone
git init # nếu chưa init
git add .
git commit -m "Initial commit: cloudzone"
# thay <GITHUB_URL> bằng url repo bạn vừa tạo
git remote add origin <GITHUB_URL>
git branch -M main
git push -u origin main
```

3) Cấu hình Render
- Đăng nhập Render (https://render.com)
- Chọn "New" → "Web Service"
- Connect GitHub account và chọn repo `cloudzone`
- Branch: `main`
- Build Command: `pip install -r requirements.txt`
- Start Command: `gunicorn --workers 4 --bind 0.0.0.0:$PORT server:app`
- Region/Plan: chọn tương ứng (ví dụ Oregon / Free)
- Create Web Service -> Render sẽ deploy lần đầu.

4) Sử dụng `render.yaml` (infra as code)
- `render.yaml` đã có trong repository; nếu cần chỉnh tên service hoặc branch, sửa file và commit.
- Render sẽ tự deploy khi push nếu `autoDeploy: true`.

5) Sau khi deploy
- Mở Render dashboard → service → Logs để kiểm tra lỗi startup.
- Kiểm tra URL public (ví dụ `https://<your-service>.onrender.com`) trong trình duyệt. Nếu thấy cảnh báo trình duyệt, chụp màn hình và kiểm tra logs.

6) An toàn (bắt buộc trước khi mở lại dịch vụ)
- Đổi mật khẩu admin (thay password plaintext trong `users.json` bằng một mật khẩu mạnh) ngay sau khi deploy.
- Tốt nhất: chuyển sang mật khẩu băm (bcrypt) trong backend trước khi lưu mật khẩu người dùng.

Ghi chú: Nếu Render suspend account vì nghi ngờ, liên hệ Support và đính kèm diagnostics bundle (đã có `tools/diagnose_site.*`).
