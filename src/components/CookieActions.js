export default function  addCookie(key) {
   console.log(key);
   return {
       type:'COOKIE',
       key: key
   };
};