import React, { useEffect, useRef } from 'react';

const BlogIframe = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    // Ensure the iframe is loaded
    iframe.onload = () => {
      try {
        // Access iframe document (only works if the iframe is on the same origin)
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

        // Remove header and footer
        const header = iframeDoc.querySelector('header');
        const footer = iframeDoc.querySelector('footer');
        if (header) header.remove();
        if (footer) footer.remove();
        
      } catch (error) {
        console.error('Cannot access iframe content due to cross-origin restrictions:', error);
      }
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        ref={iframeRef}
        src="https://www.pennmedicine.org/updates/blogs"
        title="Penn Medicine Blogs"
        style={{ width: '100%', height: '100%', border: 'none' }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BlogIframe;
