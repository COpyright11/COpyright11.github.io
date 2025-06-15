        // Navigation functionality
        function showPage(pageNum) {
            // Hide all pages
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            
            // Show selected page
            document.getElementById(`page${pageNum}`).classList.add('active');
            
            // Update navigation
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => item.classList.remove('active'));
            navItems[pageNum - 1].classList.add('active');
        }
        
        // Modal functionality
        const modalData = {
            member1: {
                title: 'Copyrightxb - Head Senctaria',
                content: `
                    <div class="member-photo" style="margin: 0 auto 1rem;">
                    <img src="pic/Copyright.png" alt="pho">
                    </div>
                    <h3>CopyrightXb [ เดรฟ ]</h3>
                    <p style="color: #3b82f6; margin: 0.5rem 0;">Head</p>
                    <p style="margin: 1rem 0; line-height: 1.6;">
                       สวัสดีครับผมชื่อ เดรฟ เวลาว่างเยอะเพราะไม่รู้จะทำอะไรเลยมานั่งเขียนโค้ดไปวันๆ
                       เวลานอนจะดีดเวลาทำงานจะง่วง เช้าก็ว่างเย็นก็ว่างบ่ายก็ว่าง ใจก็ว่างนะ
                        
                    </p>
                `
            },
            member2: {
                title: 'None - Staff',
                content: `
                    <div class="member-photo" style="margin: 0 auto 1rem;">B</div>
                    <h3>Name</h3>
                    <p style="color: #3b82f6; margin: 0.5rem 0;">Staff</p>
                    <p style="margin: 1rem 0; line-height: 1.6;">
                        ประวัติส่วนตัว
                    </p>
                `
            },
            member3: {
                title: 'None - Staff',
                content: `
                    <div class="member-photo" style="margin: 0 auto 1rem;">C</div>
                    <h3>Name</h3>
                    <p style="color: #3b82f6; margin: 0.5rem 0;">Staff</p>
                    <p style="margin: 1rem 0; line-height: 1.6;">
                        ประวัติส่วนตัว
                    </p>
                `
            },
            member4: {
                title: 'None - Staff',
                content: `
                    <div class="member-photo" style="margin: 0 auto 1rem;">D</div>
                    <h3>Name</h3>
                    <p style="color: #3b82f6; margin: 0.5rem 0;">Staff</p>
                    <p style="margin: 1rem 0; line-height: 1.6;">
                        ประวัติส่วนตัว
                    </p>
                `
            },
            member5: {
                title: 'None - Staff',
                content: `
                    <div class="member-photo" style="margin: 0 auto 1rem;">E</div>
                    <h3>Name</h3>
                    <p style="color: #3b82f6; margin: 0.5rem 0;">Staff</p>
                    <p style="margin: 1rem 0; line-height: 1.6;">
                        ประวัติส่วนตัว
                    </p>
                `
            },
            member6: {
                title: 'None - Staff',
                content: `
                    <div class="member-photo" style="margin: 0 auto 1rem;">F</div>
                    <h3>Name</h3>
                    <p style="color: #3b82f6; margin: 0.5rem 0;">Staff</p>
                    <p style="margin: 1rem 0; line-height: 1.6;">
                        ประวัติส่วนตัว
                    </p>
                `
            },
            
            project1: {
                title: 'Univercenter SS1',
                content: `
                    <div class="project-logo" style="margin: 0 auto 1rem;">
                    <img src="pic/Screenshot 2025-05-26 214051.png" >
                    </div>
                    <h3>Univercenter SS1</h3>
                    <p style="color: #3b82f6; margin: 0.5rem 0;">เนื้อเรื่อง</p>
                    <p style="margin: 1rem 0; line-height: 1.6;">
                        ขอยินดีต้อนรับเหล่าผู้มากไปด้วยความสามารถทุกท่าน ข้ายินดีอย่างยิ่งกับการจบการศึกษา พวกท่านมีทั้งความพยามแหละมั่นเพียรฝึกฝนอยู่เรื่อยมา หากท่านมายืนอยู่ตรงนี้แปลว่าข้าได้เลือกให้ท่านทั้งหลายเป็นผู้ที่จะออกมารับมือกับอุปสรรคต่างๆที่จะเผชิญได้แล้วละ....
                        พวกท่านรู้อะไรไหม ทำไม อาณาจักรของเราจึงต้องการพวกท่าน หากต้องการทราบ ข้าจะกล่าวความหลังทั้งหมดให้ท่านฟัง
                        แต่ก่อนนานมาแล้ว อาณาจักรของเรา นั้น มักมีพวกปีศาจจองจะมาโจมตีเพื่อยึดครองอยู่เรื่อยมา แต่เพราะด้านความแกร่งของทหารเราพวกมันจึงทำไม่สำเร็จสักครั้ง หากถามข้าว่าเพราะอะไรทำไมพวกมันถึงคิดแต่อยากจะแย่งชิงอาณาจักรนี้ไป ถ้าเป็นข้าเมื่อก่อนข้างคงตอบไม่ได้
                        แต่ตอนนี้ข้าทราบเรื่องนั้นแล้ว อาณาจักรของพวกเรานั้น มีสิ่งของชิ้นหนึ่งที่เป็นอาวุธเก่าแก่ประจำอาณาจักร โดยมีเจ้าเมืองเป็นคนเก็บรักษาเอาไว้รุ่นสู่รุ่น มันเป็นเหมือนดาบธรรมดาที่เก่ามากมากสะจนข้าคิดว่ามันใช้งานไม่ได้ ข้าไม่เคยเห็นมันกับตาแม้สักครั้งเดียว ท่านตาได้เล่าเรื่องดาบให้ฟังว่า " มันคือดาบ ศักสิทธิ์ที่เราต้องปกป้อง พวกมันต้องการที่จะใช้เพื่อแย่งชิงพลังที่แข็งแกร่งไป " ข้าก็ไม่รู้อะไรกับเรื่องดาบมากไปกว่านี้แล้วละ ท่านตาเล่าให้ข้าฟังเพียงเท่านี้ เอาละ ต่อจากนี้หากพวกท่านได้สายที่ชอบแล้ว ยังมีปริศนามากมายรอพวกท่านอยู่ พวกเราสู้เพื่อปกป้องความถูกต้อง พวกเราจะไม่ยอมให้ของที่ทรงพลังตกไปอยู่กับพวกนั้น 
                        ถึงแม้จะต้องมีศึกสุดท้ายก็ตามม...
                    </p>
                `
            },
            project2: {
                title: 'UnivercenterRavenhold SS2',
                content: `
                    <div class="project-logo" style="margin: 0 auto 1rem;">
                    <img src="pic/UniverscenterSS2.png" width="100" height="100">
                    </div>
                    <h3>Univercenter SS2</h3>
                    <p style="color: #3b82f6; margin: 0.5rem 0;">เนื้อเรื่อง</p>
                    <p style="margin: 1rem 0; line-height: 1.6;">
                        หลังจากสงครามระหว่างเผ่าพันธุ์ปีศาจและมนุษย์สิ้นสุดลง
                        ผู้คนมากมายต้องเสียเลือดเนื้อล้มตายกันอย่างมากมาย แม้ใน
                        ที่สุดราชาปีศาจจะถูกทำลายลง แต่การสูญเสียก็
                        หนักหนาสาหัส เหล่านักรบผู้กล้าหาญได้ต่อสู้ด้วยแรงกายและ
                        แรงใจจนอมนุษย์รอดพ้นชะตาท้าย มีเพียงไม่กี่คนที่รอดชีวิตกลับมาจาก
                        ศึกนั้น ผู้คนล้มตายกันเกิน ๆ คน แต่สุดท้ายชัยชนะก็ตกเป็นของ
                        ฝ่ายมนุษย์ เหล่านักรบผู้กล้าเขาได้ร่วมแรงร่วมใจกันรู้รบเพื่อ
                        คืนความสงบสุขให้กับโลกอีกครั้ง

                        ผ่านมา 500 ปี โลกสงบสุขมาตลอด อาณาจักรต่าง ๆ ถูก
                        สืบทอดจากรุ่นสู่รุ่น ผู้คนดำเนินชีวิตอย่างสงบสุขในเวลานี้
                        อาณาจักรถูกปกครองโดยจักรพรรดิ โครเนียส โรมานอฟ ซึ่ง
                        เป็นผู้นำเผ่าตระกูลชั้นนำ ได้แก่

                        ตระกูล Aurion (ออริออน)
                        ตระกูลที่เกี่ยวข้องกับเวทมนตร์และพลังแสง

                        ตระกูล Drakehart (เดรคฮาร์ท)
                        ตระกูลที่เกี่ยวข้องกับพลังมังกรและความแข็งแกร่ง

                        ตระกูล Shadowfen (แชโดว์เฟน)
                        ตระกูลที่เกี่ยวข้องกับความลึกลับและความมืด

                        ตระกูล Stormhaven (สตอร์มเฮเว่น)
                        ตระกูลที่เกี่ยวข้องกับพลังธรรมชาติและพายุ

                        แต่ละตระกูลเต็มไปด้วยความยิ่งใหญ่และมีเป้าหมายเดียวกัน
                        นั่นคือการเป็นตระกูลอันดับหนึ่ง เพื่อได้รับการพิจารณาให้เป็น
                        ตระกูลที่ปกครองผู้นำรุ่นต่อไป ด้วยเหตุนี้ ความโลภ ความ
                        ทะเยอทะยาน และความไม่รู้จักพอของมนุษย์ก็ได้เริ่มต้นขึ้นอีก
                        ครั้ง ผู้คนต่างจ้องจนอำนาจและทรัพย์สิน จึงทำให้ตำแหน่งและชื่อ
                        เสียง เหตุการณ์เล็ก ๆ คุกลามกลายเป็นความขัดแย้งและการ
                        แข่งขันที่...
                    </p>
                `
            },
            project3: {
                title: 'The Riddle Domin',
                content: `
                    <div class="project-logo" style="margin: 0 auto 1rem;">
                    <img src="pic/The_Riddlers_Domain.png" width="100" height="100" alt="">
                    </div>
                    <h3>The Riddle Domin</h3>
                    <p style="color: #3b82f6; margin: 0.5rem 0;">เนื้อเรื่อง</p>
                    <p style="margin: 1rem 0; line-height: 1.6;">
                        เรื่องราวของคฤหาสน์ปริศนาที่ถูกก่อตั้งขึ้นกลางป่า โดยผู้คนที่เข้ามานั้น หลงเข้ามาโดยไม่ทราบสาเหตุและจะต้องพบกับเรื่องราวประหลาดต่างๆที่เกิดขึ้นในที่แห่งนี้ โดยจะมีสองบทบาทคือบทบาทเจ้าบ้านที่เป็นคน
                        ที่อยู่ที่คฤหาสน์อยู่แล้วและบทบาทนักสืบ ที่ถูกจ้างมาให้หาคำตอบเกียวกับที่แห่งนี
                    </p>
                `
            },
            project4: {
                title: 'SenctariaSS1',
                content: `
                    <div class="project-logo" style="margin: 0 auto 1rem;">
                    <img src="pic/Sanctaria_Magic_2.png" width="100" height="100" alt="">
                    </div>
                    <h3>SectariaMagic</h3>
                    <p style="color: #3b82f6; margin: 0.5rem 0;">เนื้อเรื่อง</p>
                    <p style="margin: 1rem 0; line-height: 1.6;">
                        ในยุคที่เวทย์มนต์เป็นสิ่งที่ต้องยอมรับว่าสำคัญต่อการใช้ชีวิตเป็นอันดับแรก เวทย์มนต์เป็นเรื่องปกติที่มนุษย์ใช้ในการดำรงชีวิตกันในทุกๆวัน 
                        วิทยาศาตร์ถูกมองว่าเป็นเรื่องงมง่าย และล้าสมัย ผู้คนให้ความสนใจกับเวทย์มนต์ ผู้ไร้เวทย์มนต์เป็นผู้ที่ด้อยปัญญา 
                        และไร้ค่าในสายตาสังคมทั่วไปตั้งแต่เกิดมาผู้คนจะได้รับพรจากพระเจ้าที่มอบพลังที่คู่ควรให้แต่กำเนิดแต่ทะว่าการจะดึงความสามารถต่างๆของพลังที่ได้รับมาใช้งานอย่างมีประสิทธิภาพนั้นต้องยอมรับว่าเป็นเรื่องที่ยาก
                        จึงได้ก่อตั้งโรงเรียนเวทมนตร์เืพื่อทำการเรียนการสอนในด้านเวทย์ต่างๆ นักเรียนจะถูกคัดเลือกเข้าสู่หนึ่งในสามกลุ่มห้องที่มีความเชี่ยวชาญในศาสตร์เวทมนตร์ที่แตกต่างกัน 
                        ซึ่งแต่ละกลุ่มถือกำเนิดมาจากตำนานโบราณของจอมเวทย์ผู้ยิ่งใหญ่
                    </p>
                `
            },
            project5: {
                title: 'SenctariaSS2',
                content: `
                    <div class="project-logo" style="margin: 0 auto 1rem;">
                    <img src="pic/Dekwenn - Copy.png" width="100" height="100">
                    </div>
                    <h3>Dekwenn</h3>
                    <p style="color: #3b82f6; margin: 0.5rem 0;">เนื้อเรื่อง</p>
                    <p style="margin: 1rem 0; line-height: 1.6;">
                        เร็วๆนี้..
                    </p>
                `
            }
        };
        
        function openModal(id) {
            const modal = document.getElementById('modal');
            const modalBody = document.getElementById('modal-body');
            
            if (modalData[id]) {
                modalBody.innerHTML = modalData[id].content;
                modal.style.display = 'block';
            }
        }
        
        function closeModal() {
            document.getElementById('modal').style.display = 'none';
        }
        
        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('modal');
            if (event.target === modal) {
                closeModal();
            }
        }
        
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 20;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
                particlesContainer.appendChild(particle);
            }
        }
        
        // Initialize particles when page loads
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
        });
        
        // Smooth scrolling for internal navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });