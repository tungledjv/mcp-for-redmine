# Publishing Guide - @drjoy_vn/mcp-for-redmine

Hướng dẫn build và publish package `@drjoy_vn/mcp-for-redmine` lên npmjs.

## Prerequisites

- Node.js và npm đã được cài đặt
- Đã có tài khoản npmjs và quyền publish cho scope `@drjoy_vn`
- Đã login vào npm (nếu chưa thì xem bước 5)

## Các bước Build và Publish

### 1. Di chuyển vào thư mục project

```bash
cd d:\drjoy-services\mcp-for-redmine
```

### 2. Cài đặt dependencies

Cài đặt hoặc cập nhật các dependencies nếu cần:

```bash
npm install
```

### 3. Build project

Compile TypeScript code thành JavaScript:

```bash
npm run build
```

Lệnh này sẽ:
- Compile TypeScript (`tsc`)
- Resolve path aliases (`tsc-alias`)
- Fix ESM imports (`tsc-esm-fix`)

Output sẽ được tạo trong thư mục `dist/`.

### 4. Kiểm tra và tăng version (nếu cần)

Kiểm tra version hiện tại trong `package.json`:

```bash
cat package.json | grep version
```

**Lưu ý:** Nếu version đã tồn tại trên npmjs, bạn cần tăng version trước khi publish.

Các lệnh để tăng version:

```bash
# Patch version: 1.0.3 -> 1.0.4 (bug fixes)
npm version patch

# Minor version: 1.0.3 -> 1.1.0 (new features, backward compatible)
npm version minor

# Major version: 1.0.3 -> 2.0.0 (breaking changes)
npm version major
```

Lệnh `npm version` sẽ tự động:
- Tăng version trong `package.json`
- Tạo git commit và tag (nếu có git repo)

### 5. Login vào npm (nếu chưa login)

Kiểm tra xem đã login chưa:

```bash
npm whoami
```

Nếu chưa login, thực hiện login:

```bash
npm login
```

Nhập:
- Username
- Password
- Email
- OTP (nếu có 2FA enabled)

### 6. Kiểm tra package trước khi publish (Dry-run)

Kiểm tra những gì sẽ được publish mà không thực sự publish:

```bash
npm publish --dry-run
```

Lệnh này sẽ hiển thị:
- Files sẽ được publish (chỉ `dist/` folder theo config trong `package.json`)
- Package size
- Các thông tin khác

### 7. Publish package lên npmjs

Publish package:

```bash
npm publish --access public
```

**Lưu ý:** 
- Package name là `@drjoy_vn/mcp-for-redmine` (scoped package)
- Cần flag `--access public` để publish công khai (scoped packages mặc định là private)
- Chỉ có folder `dist/` được publish (theo config `files` trong `package.json`)

## Quick Command (All-in-one)

Nếu đã login và chỉ cần build + publish:

```bash
cd d:\drjoy-services\mcp-for-redmine && npm run build && npm publish --access public
```

## Troubleshooting

### Lỗi: "You cannot publish over the previously published versions"

**Nguyên nhân:** Version đã tồn tại trên npmjs.

**Giải pháp:** Tăng version trước khi publish (xem bước 4).

### Lỗi: "You need to authorize this machine using `npm login`"

**Nguyên nhân:** Chưa login vào npm.

**Giải pháp:** Chạy `npm login` (xem bước 5).

### Lỗi: "You do not have permission to publish"

**Nguyên nhân:** Không có quyền publish cho scope `@drjoy_vn`.

**Giải pháp:** 
- Kiểm tra bạn có quyền trong npmjs organization
- Hoặc liên hệ admin để được cấp quyền

### Lỗi: "Access token expired or revoked" + "404 Not Found"

**Nguyên nhân:** 
1. Access token đã hết hạn hoặc bị revoke
2. Không có quyền publish cho scope `@drjoy_vn` hoặc organization chưa được setup

**Giải pháp:**

**Bước 1: Login lại vào npm**
```bash
# Logout (nếu cần)
npm logout

# Login lại
npm login
```

**Bước 2: Kiểm tra quyền publish cho scope**

Với scoped packages (`@drjoy_vn/mcp-for-redmine`), bạn cần:

1. **Nếu `@drjoy_vn` là organization:**
   - Đảm bảo bạn là member của organization
   - Kiểm tra trên https://www.npmjs.com/settings/drjoy_vn/members
   - Đảm bảo bạn có quyền "Publish packages"

2. **Nếu `@drjoy_vn` chưa tồn tại:**
   - Tạo organization trên npmjs.com
   - Hoặc đổi scope trong `package.json` thành username của bạn (ví dụ: `@tungledjv/mcp-for-redmine`)

3. **Kiểm tra quyền hiện tại:**
```bash
# Xem thông tin user hiện tại
npm whoami

# Kiểm tra xem package đã tồn tại chưa
npm view @drjoy_vn/mcp-for-redmine
```

**Bước 3: Thử publish lại sau khi login**
```bash
npm publish --access public
```

**Lưu ý:** Nếu đây là lần đầu publish package với scope `@drjoy_vn`, đảm bảo:
- Organization `@drjoy_vn` đã được tạo trên npmjs.com
- Bạn là owner hoặc có quyền publish trong organization đó

### Build failed

**Nguyên nhân:** Có lỗi TypeScript compilation.

**Giải pháp:**
- Kiểm tra lỗi TypeScript: `npm run build`
- Sửa các lỗi compilation
- Đảm bảo `tsconfig.json` được cấu hình đúng

## Package Information

- **Package name:** `@drjoy_vn/mcp-for-redmine`
- **Main entry:** `dist/index.js`
- **CLI binary:** `dist/cli.js`
- **Published files:** Chỉ `dist/` folder
- **License:** MIT

## Useful Commands

```bash
# Xem thông tin package đã publish
npm view @drjoy_vn/mcp-for-redmine

# Xem tất cả versions đã publish
npm view @drjoy_vn/mcp-for-redmine versions

# Xem version mới nhất
npm view @drjoy_vn/mcp-for-redmine version

# Unpublish một version (chỉ trong 72 giờ đầu)
npm unpublish @drjoy_vn/mcp-for-redmine@1.0.3
```

## Best Practices

1. **Luôn test trước khi publish:** Chạy `npm run build` và kiểm tra output trong `dist/`
2. **Sử dụng dry-run:** Luôn chạy `npm publish --dry-run` trước khi publish thật
3. **Tăng version đúng cách:** 
   - Patch cho bug fixes
   - Minor cho new features (backward compatible)
   - Major cho breaking changes
4. **Commit và tag:** `npm version` tự động tạo git commit và tag, nhớ push lên remote
5. **Kiểm tra package sau khi publish:** Xem package trên npmjs.com để đảm bảo publish thành công

## Related Files

- `package.json` - Package configuration và scripts
- `tsconfig.json` - TypeScript configuration
- `dist/` - Build output (được publish lên npmjs)

