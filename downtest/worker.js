export default {
    async fetch(request) {
      const target = "https://speed.cloudflare.com/__down?bytes=104820";
  
      return await fetch(target);
    },
  };
