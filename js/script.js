document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.getElementById('menuToggle'),links=document.getElementById('navLinks');
 toggle.addEventListener('click',()=>links.classList.toggle('open'));
 links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
 document.getElementById('currentYear').textContent=new Date().getFullYear();
 const form=document.getElementById('registrationForm'),status=document.getElementById('formStatus');
 form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const nama=form.elements.nama.value.trim();status.textContent=`Terima kasih, ${nama}. Data pada formulir berhasil diperiksa. Silakan hubungi panitia untuk proses selanjutnya.`;form.reset();});
});
