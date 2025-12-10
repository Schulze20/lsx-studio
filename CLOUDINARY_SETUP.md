# Configurar Vídeos no Cloudinary

## 1. Criar Conta Cloudinary

1. Acesse: https://cloudinary.com/users/register/free
2. Inscreva-se (é gratuito!)
3. Confirme o email

## 2. Encontrar Suas Credenciais

1. Acesse: https://dashboard.cloudinary.com/settings/general
2. Copie seu **Cloud Name**
3. Adicione ao arquivo `.env.local`:
   ```
   VITE_CLOUD_NAME=seu-cloud-name-aqui
   ```

## 3. Upload dos Vídeos

### Opção A: Upload Manual (mais fácil)
1. Acesse: https://cloudinary.com/console/media_library
2. Clique em "Upload" (canto superior direito)
3. Faça upload dos 3 vídeos:
   - `projeto1m.mp4` (arquivo local que você tem)
   - `projeto2v.mp4` (arquivo local que você tem)
   - `projeto3v.mp4` (arquivo local que você tem)
4. Espere o processamento (pode levar alguns minutos)
5. Clique em cada vídeo para copiar a URL

### Opção B: Upload via API (automático)
```bash
npm install cloudinary
```

## 4. Adicionar URLs ao `.env.local`

Depois de fazer upload, copie as URLs:

```
VITE_VIDEO_PROJETO1=https://res.cloudinary.com/seu-cloud-name/video/upload/v123456/projeto1.mp4
VITE_VIDEO_PROJETO2=https://res.cloudinary.com/seu-cloud-name/video/upload/v123456/projeto2.mp4
VITE_VIDEO_PROJETO3=https://res.cloudinary.com/seu-cloud-name/video/upload/v123456/projeto3.mp4
```

## 5. Testar Localmente

```bash
npm install
npm run dev
```

## 6. Deploy

```bash
npm run deploy
```

---

**Nota:** O arquivo `.env.local` é local e não será commitado no Git. É seguro guardar seus vídeos lá!

**Limite Grátis Cloudinary:**
- 25GB de armazenamento
- Uploads ilimitados
- Transformações ilimitadas
- Bandwidth mensal: 25GB

Isso é mais que suficiente para um portfolio!
