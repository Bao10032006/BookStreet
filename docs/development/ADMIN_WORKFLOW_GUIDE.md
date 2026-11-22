# Admin kiểm soát điều kiện vận hành hệ thống

> Nội dung đề xuất cho **một slide** về nghiệp vụ chính của role Admin trong BookStreet.

| Khóa tài khoản | Khóa tổ chức Partner | Kiểm soát vai trò |
|---|---|---|
| User ngừng dùng các chức năng cần đăng nhập từ request tiếp theo, kể cả khi session đang mở. | Partner không thể gửi application, yêu cầu booth, đề xuất/yêu cầu Activity hoặc khởi tạo thanh toán mới. Organizer không thể duyệt/chọn các yêu cầu liên quan của tổ chức bị khóa. | Gỡ role làm mất quyền từ request tiếp theo. Role mới được gán chỉ có hiệu lực sau khi User đăng nhập lại. |
| Việc khóa không tự hủy Event, đơn hoặc dữ liệu đã có. | Booth đã được giao vẫn giữ nguyên; Payment đã khởi tạo tiếp tục được xử lý. Không tự thu hồi booth hoặc hoàn tiền. | Các ràng buộc bảo vệ Admin cuối cùng và dữ liệu nghiệp vụ đang mở vẫn được kiểm tra. |

**Nguyên tắc chung:** Mỗi thay đổi quản trị hợp lệ được kiểm tra ở backend và ghi audit cùng transaction. Admin giám sát qua dashboard, lịch sử thanh toán và audit log, nhưng không vận hành Event thay Organizer.

## Lời thuyết trình gợi ý (30–45 giây)

“Admin kiểm soát ai còn quyền hoạt động và tổ chức Partner có được tiếp tục phát sinh nghiệp vụ mới hay không. Khi khóa tài khoản hoặc gỡ vai trò, quyền truy cập thay đổi từ request tiếp theo, kể cả với phiên đang mở. Khi khóa tổ chức Partner, hệ thống chặn các yêu cầu mới của Partner và bước duyệt tương ứng của Organizer, nhưng booth đã cấp và giao dịch đã bắt đầu vẫn được giữ và xử lý. Mọi thay đổi quản trị hợp lệ đều được ghi nhật ký để truy vết.”

## Gợi ý bố cục slide

- Đặt **“Khóa tổ chức Partner”** ở giữa và rộng hơn hai cột còn lại vì đây là tác động xuyên role rõ nhất.
- Dùng một biểu tượng cho mỗi cột: tài khoản, tổ chức, vai trò.
- Đặt dòng **“Backend kiểm tra → lưu thay đổi + audit”** ở chân slide.
- Giữ lời thuyết trình trong ghi chú; trên slide chỉ dùng các ý ngắn trong bảng.

*Nguồn: `docs/requirements/05_Business_Rules.md` (`BR-113`–`BR-118`) và `docs/use-cases/sprint-11-use-case-specifications.md`.*
