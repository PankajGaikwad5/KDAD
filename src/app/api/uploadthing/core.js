import { createUploadthing } from 'uploadthing/next';
import { UploadThingError } from 'uploadthing/server';

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({
    image: {
      /**
       * For full list of options and defaults, see the File Route API reference
       * @see https://docs.uploadthing.com/file-routes#route-config
       */
      maxFileSize: '1GB',
      maxFileCount: 20,
    },
  })
    // Set permissions and file types for this FileRoute
    .middleware(async () => {
      // No authentication logic; allow all uploads
      return {}; // Return empty metadata
    })
    .onUploadComplete(async ({ file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log('Upload complete');
      console.log('file url', file.url);

      // Return data to be sent to the clientside `onClientUploadComplete` callback
      return { uploaded: true };
    }),
};
