<diff>
      @@ -1,5 +1,5 @@
       import { StrictMode } from 'react';
       import { createRoot } from 'react-dom/client';
-      import App from './App.tsx';
+      import { App } from './App.tsx'; // Use named import
       import './index.css';

       createRoot(document.getElementById('root')!).render(
    </diff>
