# Hướng dẫn cài đặt AOE Extension trên Google Chrome

Để cài đặt extension AOE (Ask Open WebUI Everywhere) trên trình duyệt Google Chrome, bạn hãy làm theo các bước sau:

## Bước 1: Chuẩn bị mã nguồn
1.  Tải xuống hoặc Clone repository này về máy tính của bạn.
2.  Giải nén file (nếu bạn tải về dưới dạng .zip).
3.  Xác định vị trí thư mục `AOE` trong mã nguồn vừa tải về. Đây là thư mục chứa file `manifest.json`.

## Bước 2: Mở trang quản lý Extension trên Chrome
1.  Mở trình duyệt Google Chrome.
2.  Trên thanh địa chỉ, nhập đường dẫn sau và nhấn Enter:
    ```
    chrome://extensions/
    ```
    Hoặc bạn có thể truy cập qua menu: Nhấn vào biểu tượng **3 chấm dọc** (góc trên bên phải) > **Tiện ích mở rộng (Extensions)** > **Quản lý tiện ích (Manage Extensions)**.

## Bước 3: Bật chế độ nhà phát triển (Developer mode)
1.  Tại giao diện trang Extensions, nhìn lên góc trên bên phải.
2.  Tìm công tắc **Developer mode** (Chế độ dành cho nhà phát triển) và gạt sang trạng thái **Bật** (On).

## Bước 4: Tải tiện ích lên (Load unpacked)
1.  Sau khi bật Developer mode, bạn sẽ thấy xuất hiện 3 nút chức năng ở phía trên bên trái.
2.  Nhấn vào nút **Load unpacked** (Tải tiện ích đã giải nén).

## Bước 5: Chọn thư mục Extension
1.  Một cửa sổ chọn thư mục sẽ hiện ra.
2.  Điều hướng đến vị trí bạn đã lưu mã nguồn ở Bước 1.
3.  Chọn thư mục `AOE` (Lưu ý: Chọn thư mục `AOE`, không phải thư mục gốc của cả dự án).
4.  Nhấn **Select Folder** (hoặc Open/OK tùy hệ điều hành).

## Bước 6: Kiểm tra và Hoàn tất
1.  Nếu thành công, bạn sẽ thấy thẻ extension **AOE** xuất hiện trong danh sách.
2.  Extension đã sẵn sàng để sử dụng. Bạn có thể ghim nó lên thanh công cụ của Chrome để truy cập nhanh hơn.

---

## Cấu hình ban đầu (Bắt buộc)

Sau khi cài đặt, bạn cần kết nối extension với Open WebUI của bạn:

1.  Chuột phải vào biểu tượng **AOE** trên thanh công cụ trình duyệt.
2.  Chọn **Options** (Tùy chọn).
3.  Trong trang cài đặt hiện ra:
    *   **UI URL:** Nhập địa chỉ Open WebUI của bạn (ví dụ: `http://localhost:3000/` hoặc domain riêng của bạn).
    *   **Target Match URL:** Nhập pattern cho phép quyền truy cập (thường là domain của bạn kèm dấu sao, ví dụ: `http://localhost:3000/*`).
4.  Nhấn **Save** để lưu lại.
