```javascript
// app/page.js
export default function Home() {
  return (
    <div>Hello</div>
  );
}
```

This corrected version removes any potentially problematic data fetching functions or other structure issues that may be causing a conflict in the Next.js 15 app directory.  The simpler structure is more likely to work correctly in the app directory setup.  If the error persists, check for any issues in your routing configuration within the app directory.