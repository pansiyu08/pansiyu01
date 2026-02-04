# 如何新增圖片 / How to Add Images

您的專案結構應該長這樣：
Your project structure should look like this:

```
/ (Project Root)
├── index.html
├── src/
├── package.json
└── public/          <-- 圖片請放在這裡 / Put images here
    ├── adda-mockup-cover.jpg
    ├── adda-mockup-spread1.jpg
    └── adda-mockup-spread2.jpg
```

### 步驟 / Steps:

1. **建立 public 資料夾**：如果專案根目錄沒有 `public` 資料夾，請建立一個。
   **Create folder**: If there is no `public` folder at the root, create one.

2. **準備圖片**：將您的圖片檔名修改如下：
   **Prepare images**: Rename your image files to:
   - `adda-mockup-cover.jpg`
   - `adda-mockup-spread1.jpg`
   - `adda-mockup-spread2.jpg`

3. **拖曳上傳**：將這些檔案拖曳進 `public` 資料夾。
   **Upload**: Drag and drop these files into the `public` folder.

如果圖片放置正確，重新整理網頁後就會看到您的作品。如果沒有放置圖片，系統會顯示預設的範例圖。
If placed correctly, reload the page to see your work. If missing, a fallback image will be shown.
