<template>
  <div :class="[styleThemeClass, 'min-h-screen transition-colors duration-500 overflow-x-hidden']">
    <!-- Navigation Bar -->
    <header class="w-full py-4 px-6 sm:px-12 flex items-center justify-between border-b transition-all duration-300 relative z-50"
      :class="navClass">
      <div class="flex items-center gap-3 group cursor-pointer">
        <img v-if="companyInfo.logo_path" :src="companyInfo.logo_path" alt="Logo" class="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
        <div v-else class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-black transition-transform duration-300 group-hover:rotate-6">
          {{ companyInfo.company_name?.charAt(0) || 'C' }}
        </div>
        <span class="font-black text-lg tracking-tight transition-colors duration-300 truncate max-w-[180px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-xl xl:whitespace-normal xl:overflow-visible" :class="textTitleClass">
          {{ companyInfo.company_name || 'My Company' }}
        </span>
      </div>

      <!-- Links (Desktop) -->
      <nav class="hidden md:flex items-center gap-8 text-sm font-semibold transition-colors duration-300" :class="textMutedClass">
        <a href="#about" class="relative py-1 transition-colors duration-200 hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300">Về chúng tôi</a>
        <a href="#services" class="relative py-1 transition-colors duration-200 hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300">Dịch vụ</a>
        <a href="#contact" class="relative py-1 transition-colors duration-200 hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300">Liên hệ</a>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-4">
        <!-- CTA Button (Desktop) -->
        <NuxtLink to="/login" class="hidden md:inline-block text-sm font-bold px-5 py-2.5 rounded-xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          :class="ctaBtnClass">
          Hệ thống Quản lý
        </NuxtLink>

        <!-- Hamburger Button (Mobile) -->
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 transition-colors hover:bg-slate-100 dark:hover:bg-slate-900 focus:outline-none">
          <i :class="isMobileMenuOpen ? 'pi pi-times' : 'pi pi-bars'" class="text-lg"></i>
        </button>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div v-if="isMobileMenuOpen" 
        class="md:hidden absolute top-full left-0 right-0 border-b shadow-2xl z-50 flex flex-col p-6 space-y-4 animate-in slide-in-from-top-3 duration-300"
        :class="mobileMenuClass">
        <a href="#about" @click="isMobileMenuOpen = false" class="text-sm font-bold py-2 border-b border-slate-100 dark:border-slate-850 hover:text-primary transition-colors">Về chúng tôi</a>
        <a href="#services" @click="isMobileMenuOpen = false" class="text-sm font-bold py-2 border-b border-slate-100 dark:border-slate-850 hover:text-primary transition-colors">Dịch vụ</a>
        <a href="#contact" @click="isMobileMenuOpen = false" class="text-sm font-bold py-2 border-b border-slate-100 dark:border-slate-850 hover:text-primary transition-colors">Liên hệ</a>
        <NuxtLink to="/login" @click="isMobileMenuOpen = false" class="text-sm font-bold text-center py-3 rounded-xl border transition-all mt-2"
          :class="ctaBtnClass">
          Hệ thống Quản lý
        </NuxtLink>
      </div>
    </header>

    <!-- Style 1: Modern Tech -->
    <main v-if="activeStyle === 'style1'" class="w-full">
      <!-- Hero Section -->
      <section class="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Blur backgrounds decorative -->
        <div class="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div class="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-violet-500/10 dark:bg-violet-500/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div class="lg:col-span-7 space-y-8 text-left relative z-10">
          <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 text-xs font-semibold border border-indigo-500/20 backdrop-blur-sm">
            <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            {{ businessFieldLabel }}
          </div>
          <h1 class="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[1.05] text-slate-900 dark:text-white">
            {{ companyInfo.slogan_1 || 'Đột phá giải pháp số' }}
            <span class="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500">
              {{ companyInfo.slogan_2 || 'Kiến tạo tương lai vững bền' }}
            </span>
          </h1>
          <p class="text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
            {{ companyInfo.slogan_3 || 'Chúng tôi cung cấp các giải pháp chuyên nghiệp, ứng dụng công nghệ cao hàng đầu phục vụ sự phát triển vượt bậc của doanh nghiệp.' }}
          </p>
          <div class="flex flex-wrap gap-4 pt-4">
            <a href="#services" class="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 hover:-translate-y-0.5 transition-all">
              Khám phá Dịch vụ
            </a>
            <a href="#about" class="px-8 py-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/60 text-slate-700 dark:text-slate-350 font-bold text-sm hover:-translate-y-0.5 transition-all">
              Tìm hiểu thêm
            </a>
          </div>
        </div>

        <!-- Banner Right Carousel -->
        <div class="lg:col-span-5 relative group">
          <div class="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-3xl blur-2xl opacity-20 dark:opacity-30"></div>
          <div class="relative z-10 w-full aspect-[4/3] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden bg-slate-100 dark:bg-slate-950">
            <div v-for="(slide, idx) in slides" :key="idx" 
              class="absolute inset-0 transition-all duration-700 ease-in-out transform"
              :class="[idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none']">
              <img :src="slide" alt="Banner Slide" class="w-full h-full object-cover" />
            </div>

            <!-- Carousel Controls -->
            <button @click="prevSlide" class="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800 text-slate-800 dark:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 shadow">
              <i class="pi pi-chevron-left text-xs"></i>
            </button>
            <button @click="nextSlide" class="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800 text-slate-800 dark:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 shadow">
              <i class="pi pi-chevron-right text-xs"></i>
            </button>

            <!-- Slide Dots Indicator -->
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
              <button v-for="(_, idx) in slides" :key="idx" 
                @click="setSlide(idx)" 
                class="w-1.5 h-1.5 rounded-full transition-all"
                :class="idx === currentSlide ? 'bg-indigo-600 w-4' : 'bg-slate-400 dark:bg-slate-600'">
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Client Logo Showcase Section -->
      <section class="py-12 border-y border-slate-200/50 dark:border-slate-900/50 bg-slate-50/50 dark:bg-slate-950/20">
        <div class="max-w-7xl mx-auto px-6 sm:px-12 text-center space-y-6">
          <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">Đồng hành cùng các thương hiệu lớn</p>
          <div class="flex flex-wrap items-center justify-center gap-12 sm:gap-20 opacity-40 dark:opacity-30">
            <span class="text-xl font-black tracking-wider hover:opacity-100 transition-opacity">MICROSOFT</span>
            <span class="text-xl font-black tracking-wider hover:opacity-100 transition-opacity">GOOGLE</span>
            <span class="text-xl font-black tracking-wider hover:opacity-100 transition-opacity">AMAZON</span>
            <span class="text-xl font-black tracking-wider hover:opacity-100 transition-opacity">META</span>
            <span class="text-xl font-black tracking-wider hover:opacity-100 transition-opacity">NETFLIX</span>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section id="services" class="py-28 bg-slate-50/50 dark:bg-slate-950/40">
        <div class="max-w-7xl mx-auto px-6 sm:px-12 text-center space-y-16">
          <div class="max-w-xl mx-auto space-y-4">
            <h2 class="text-xs font-black text-indigo-500 uppercase tracking-widest">Dịch vụ cốt lõi</h2>
            <p class="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Giải pháp chúng tôi mang lại</p>
            <p class="text-slate-500 dark:text-slate-400 text-sm">Chúng tôi thiết kế các gói dịch vụ chuẩn hóa nhằm hỗ trợ doanh nghiệp tối ưu năng suất hoạt động tối đa.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="(service, idx) in services" :key="idx" 
              class="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-left space-y-6 group">
              <div class="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xl font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all">
                0{{ idx + 1 }}
              </div>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white tracking-tight">{{ service.title }}</h3>
              <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{{ service.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Core Values Section -->
      <section class="py-28 bg-white dark:bg-slate-900">
        <div class="max-w-7xl mx-auto px-6 sm:px-12 text-center space-y-16">
          <div class="max-w-xl mx-auto space-y-4">
            <h2 class="text-xs font-black text-indigo-500 uppercase tracking-widest">Giá trị cốt lõi</h2>
            <p class="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Kim chỉ nam của sự phát triển</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="p-8 rounded-3xl bg-slate-50/50 dark:bg-slate-950/20 border border-slate-100 dark:border-slate-850 space-y-4 text-left">
              <div class="text-2xl">🛡️</div>
              <h4 class="text-lg font-bold">An toàn & Bảo mật</h4>
              <p class="text-xs text-slate-500 leading-relaxed">Đảm bảo an toàn tuyệt đối thông tin dữ liệu của khách hàng là ưu tiên hàng đầu.</p>
            </div>
            <div class="p-8 rounded-3xl bg-slate-50/50 dark:bg-slate-950/20 border border-slate-100 dark:border-slate-850 space-y-4 text-left">
              <div class="text-2xl">💡</div>
              <h4 class="text-lg font-bold">Đổi mới sáng tạo</h4>
              <p class="text-xs text-slate-500 leading-relaxed">Không ngừng nghiên cứu và áp dụng công nghệ mới nâng tầm giải pháp.</p>
            </div>
            <div class="p-8 rounded-3xl bg-slate-50/50 dark:bg-slate-950/20 border border-slate-100 dark:border-slate-850 space-y-4 text-left">
              <div class="text-2xl">⚡</div>
              <h4 class="text-lg font-bold">Tối ưu hiệu suất</h4>
              <p class="text-xs text-slate-500 leading-relaxed">Đơn giản hóa mọi quy trình phức tạp giúp tăng năng suất vượt bậc.</p>
            </div>
            <div class="p-8 rounded-3xl bg-slate-50/50 dark:bg-slate-950/20 border border-slate-100 dark:border-slate-850 space-y-4 text-left">
              <div class="text-2xl">🤝</div>
              <h4 class="text-lg font-bold">Đồng hành cam kết</h4>
              <p class="text-xs text-slate-500 leading-relaxed">Sự tin tưởng và hài lòng của khách hàng chính là đích đến cuối cùng.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-28 max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div class="lg:col-span-5 relative">
          <div class="absolute -inset-4 bg-indigo-500/10 rounded-[2rem] blur-xl"></div>
          <img :src="aboutImage" alt="About us" class="relative z-10 w-full h-auto rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-2xl object-cover aspect-[4/3]" />
        </div>
        <div class="lg:col-span-7 space-y-8 text-left">
          <h2 class="text-xs font-black text-indigo-500 uppercase tracking-widest">Về chúng tôi</h2>
          <h3 class="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">Kiến tạo giá trị thực thông qua sự chuyên nghiệp</h3>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
            {{ companyInfo.about_us || 'Chúng tôi là tập thể chuyên gia nhiệt huyết cam kết mang đến những sản phẩm tốt nhất cho đối tác toàn cầu. Dựa trên triết lý đặt khách hàng làm trung tâm, công ty liên tục nghiên cứu và chuyển mình để tối ưu hóa hiệu quả kinh doanh.' }}
          </p>
          
          <!-- Statistics grid -->
          <div class="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200/50 dark:border-slate-850">
            <div>
              <div class="text-4xl font-black text-indigo-600 dark:text-indigo-400">10+</div>
              <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Năm kinh nghiệm</div>
            </div>
            <div>
              <div class="text-4xl font-black text-indigo-600 dark:text-indigo-400">99%</div>
              <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Hài lòng cam kết</div>
            </div>
            <div>
              <div class="text-4xl font-black text-indigo-600 dark:text-indigo-400">500+</div>
              <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Dự án bàn giao</div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="py-28 bg-slate-50/50 dark:bg-slate-950/40">
        <div class="max-w-4xl mx-auto px-6 space-y-16">
          <div class="text-center space-y-4">
            <h2 class="text-xs font-black text-indigo-500 uppercase tracking-widest">Hỏi đáp thắc mắc</h2>
            <p class="text-4xl font-extrabold text-slate-900 dark:text-white">Giải đáp thông tin dịch vụ</p>
          </div>
          <div class="space-y-4 text-left">
            <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800">
              <h4 class="font-bold text-slate-900 dark:text-white">Quy trình bắt đầu dịch vụ như thế nào?</h4>
              <p class="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">Chúng tôi tiến hành khảo sát yêu cầu, tư vấn giải pháp tối ưu nhất, lập kế hoạch chi tiết và tiến hành triển khai chuẩn chỉ theo từng giai đoạn cam kết.</p>
            </div>
            <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800">
              <h4 class="font-bold text-slate-900 dark:text-white">Công ty có chính sách bảo hành và bảo trì không?</h4>
              <p class="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">Tất cả các dịch vụ và giải pháp bàn giao đều đi kèm gói hỗ trợ vận hành 12-24 tháng, hỗ trợ khắc phục sự cố khẩn cấp 24/7 nhằm bảo đảm kinh doanh thông suốt.</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Style 2: Elegant Classic -->
    <main v-else-if="activeStyle === 'style2'" class="w-full font-serif bg-[#fcfaf5] dark:bg-[#151311] text-stone-900 dark:text-stone-100">
      <!-- Hero Section -->
      <section class="relative py-28 px-6 sm:px-12 text-center max-w-5xl mx-auto space-y-10">
        <div class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 text-[10px] font-bold tracking-widest uppercase border border-amber-500/20 backdrop-blur-sm">
          ⚜️ {{ businessFieldLabel }} ⚜️
        </div>
        <h1 class="text-5xl sm:text-7xl font-light tracking-tight text-stone-900 dark:text-amber-100 leading-tight">
          {{ companyInfo.slogan_1 || 'Tinh hoa trong từng giải pháp' }}
          <span class="block italic font-normal text-amber-700 dark:text-amber-500 mt-3">
            {{ companyInfo.slogan_2 || 'Sang trọng, Uy tín & Vững bền' }}
          </span>
        </h1>
        <p class="text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed font-sans">
          {{ companyInfo.slogan_3 || 'Chúng tôi phát triển doanh nghiệp bằng cả trái tim và sự chuẩn mực cao nhất, nâng tầm vị thế thương hiệu.' }}
        </p>
        <div class="flex justify-center gap-4 pt-4 font-sans">
          <a href="#services" class="px-8 py-3.5 rounded-none border border-amber-700 bg-amber-700 hover:bg-transparent hover:text-amber-700 dark:hover:text-amber-400 text-white font-bold text-xs tracking-widest uppercase transition-all">
            Khám phá dịch vụ
          </a>
          <a href="#about" class="px-8 py-3.5 rounded-none border border-stone-300 dark:border-stone-800 hover:border-amber-700 text-stone-700 dark:text-stone-300 font-bold text-xs tracking-widest uppercase transition-all">
            Về chúng tôi
          </a>
        </div>
        
        <!-- Classic Banner Slider -->
        <div class="pt-12 relative group max-w-6xl mx-auto">
          <div class="relative w-full h-[480px] overflow-hidden border border-amber-900/10 dark:border-amber-900/20 shadow-2xl bg-stone-100 dark:bg-stone-900">
            <div v-for="(slide, idx) in slides" :key="idx" 
              class="absolute inset-0 transition-all duration-1000 ease-in-out transform"
              :class="[idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none']">
              <img :src="slide" alt="Classic Banner Slide" class="w-full h-full object-cover" />
            </div>

            <!-- Controls -->
            <button @click="prevSlide" class="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-none bg-[#fcfaf5]/90 dark:bg-stone-950/90 border border-amber-900/10 text-stone-800 dark:text-stone-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-20 shadow hover:bg-amber-700 hover:text-white">
              <i class="pi pi-chevron-left text-xs"></i>
            </button>
            <button @click="nextSlide" class="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-none bg-[#fcfaf5]/90 dark:bg-stone-950/90 border border-amber-900/10 text-stone-800 dark:text-stone-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-20 shadow hover:bg-amber-700 hover:text-white">
              <i class="pi pi-chevron-right text-xs"></i>
            </button>

            <!-- Indicators -->
            <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              <button v-for="(_, idx) in slides" :key="idx" 
                @click="setSlide(idx)" 
                class="w-1.5 h-1.5 rounded-full transition-all"
                :class="idx === currentSlide ? 'bg-amber-700 w-8' : 'bg-stone-300 dark:bg-stone-700'">
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats section classic -->
      <section class="py-16 border-y border-amber-900/10 dark:border-amber-900/20 bg-[#faf8f2] dark:bg-stone-900/10 font-sans">
        <div class="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          <div class="space-y-2">
            <p class="text-amber-750 dark:text-amber-500 font-serif text-4xl font-light">I. THÀNH TỰU</p>
            <p class="text-xs tracking-wider uppercase text-stone-500 dark:text-stone-400">Hơn 15 năm kiến tạo phát triển</p>
          </div>
          <div class="space-y-2 border-y sm:border-y-0 sm:border-x border-amber-900/10 dark:border-amber-900/20 py-6 sm:py-0">
            <p class="text-amber-750 dark:text-amber-500 font-serif text-4xl font-light">II. CAM KẾT</p>
            <p class="text-xs tracking-wider uppercase text-stone-500 dark:text-stone-400">100% bảo mật & chuẩn mực tối đa</p>
          </div>
          <div class="space-y-2">
            <p class="text-amber-750 dark:text-amber-500 font-serif text-4xl font-light">III. ĐỐI TÁC</p>
            <p class="text-xs tracking-wider uppercase text-stone-500 dark:text-stone-400">Mạng lưới 300+ doanh nghiệp lớn</p>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section id="services" class="py-28 bg-[#fdfcfa] dark:bg-[#1a1816]/40 border-b border-amber-900/10 dark:border-amber-900/20">
        <div class="max-w-7xl mx-auto px-6 sm:px-12 text-center space-y-16">
          <div class="max-w-xl mx-auto space-y-4">
            <h2 class="text-xs font-bold text-amber-700 dark:text-amber-500 uppercase tracking-widest font-sans">Dịch vụ chuẩn mực</h2>
            <p class="text-4xl text-stone-900 dark:text-white">Giải pháp chuyên sâu & Tận tâm</p>
            <p class="text-stone-500 dark:text-stone-400 text-sm font-sans leading-relaxed">Chúng tôi cam kết duy trì chất lượng vượt trội đáp ứng những đòi hỏi khắt khe nhất của thị trường.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-12 font-sans">
            <div v-for="(service, idx) in services" :key="idx" 
              class="p-8 bg-white dark:bg-[#201d1a] border border-stone-200/60 dark:border-stone-850 hover:border-amber-700 hover:shadow-lg transition-all duration-350 text-center space-y-6">
              <div class="text-amber-700 dark:text-amber-500 font-serif text-4xl italic font-light">
                0{{ idx + 1 }}
              </div>
              <h3 class="text-xl font-bold text-stone-900 dark:text-white tracking-tight">{{ service.title }}</h3>
              <p class="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">{{ service.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonial Quote Section -->
      <section class="py-24 max-w-4xl mx-auto px-6 text-center space-y-8 italic">
        <span class="text-3xl text-amber-700 dark:text-amber-500">“</span>
        <blockquote class="text-xl sm:text-2xl text-stone-800 dark:text-stone-250 leading-relaxed font-serif font-light">
          Sự tinh tế, quy chuẩn và chuyên nghiệp trong từng chi tiết là lý do chúng tôi luôn tin tưởng và lựa chọn đồng hành cùng doanh nghiệp trong suốt thời gian qua.
        </blockquote>
        <div class="font-sans text-xs tracking-widest uppercase text-stone-550 dark:text-stone-450 not-italic">
          — ĐẠI DIỆN ĐỐI TÁC CHIẾN LƯỢC TOÀN CẦU
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-28 max-w-6xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-amber-900/10 dark:border-amber-900/20 items-center">
        <div class="space-y-8 text-left">
          <h2 class="text-xs font-bold text-amber-700 dark:text-amber-500 uppercase tracking-widest font-sans">Giới thiệu</h2>
          <h3 class="text-4xl text-stone-900 dark:text-white font-normal leading-snug">Kiến tạo tương lai dựa trên nền tảng vững chắc</h3>
          <p class="text-stone-600 dark:text-stone-300 leading-relaxed font-sans text-base">
            {{ companyInfo.about_us || 'Chúng tôi tự hào mang lại các giá trị truyền thống kết hợp cùng tư duy đổi mới nhằm giúp đối tác đạt được hiệu quả kinh doanh tối ưu nhất.' }}
          </p>
        </div>
        <div>
          <img :src="aboutImage" alt="Classic About" class="w-full h-[400px] object-cover rounded-none border border-amber-900/15 dark:border-amber-850 shadow-2xl" />
        </div>
      </section>
    </main>

    <!-- Style 3: Minimalist Clean -->
    <main v-else-if="activeStyle === 'style3'" class="w-full font-mono text-slate-800 dark:text-slate-100 bg-white dark:bg-black">
      <!-- Hero Section -->
      <section class="py-24 px-6 sm:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-slate-200 dark:border-slate-800">
        <div class="lg:col-span-7 space-y-8 text-left">
          <div class="text-xs text-slate-400 tracking-widest uppercase">
            // FIELD: {{ businessFieldLabel }}
          </div>
          <h1 class="text-4xl sm:text-6xl font-light tracking-tight leading-[1.1]">
            {{ companyInfo.slogan_1 || 'Tối giản tư duy.' }}
            <span class="block font-bold mt-2">
              {{ companyInfo.slogan_2 || 'Tối đa hiệu quả.' }}
            </span>
          </h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed font-sans">
            {{ companyInfo.slogan_3 || 'Giải pháp gọn gàng, loại bỏ các chi tiết thừa thãi giúp doanh nghiệp vận hành trơn tru và trực quan.' }}
          </p>
          <div class="pt-6 font-sans">
            <a href="#services" class="inline-flex items-center gap-3 text-xs font-bold tracking-widest uppercase hover:underline">
              [ XEM DỊCH VỤ ]
              <i class="pi pi-arrow-right"></i>
            </a>
          </div>
        </div>

        <!-- Banner Right Carousel Minimalist -->
        <div class="lg:col-span-5 relative group">
          <div class="relative w-full aspect-[4/3] border border-slate-900 dark:border-slate-100 p-2 bg-white dark:bg-black">
            <div class="relative w-full h-full overflow-hidden bg-slate-50 dark:bg-neutral-950">
              <div v-for="(slide, idx) in slides" :key="idx" 
                class="absolute inset-0 transition-all duration-500 transform filter grayscale hover:grayscale-0"
                :class="[idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none']">
                <img :src="slide" alt="Minimal Banner Slide" class="w-full h-full object-cover" />
              </div>
              
              <!-- Indicator minimal -->
              <div class="absolute bottom-3 right-3 bg-white dark:bg-black px-2 py-1 text-[10px] border border-slate-900 dark:border-slate-150 z-20">
                0{{ currentSlide + 1 }} / 0{{ slides.length }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Modular Table Grid -->
      <section class="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-2 md:grid-cols-4 border-b border-slate-200 dark:border-slate-800 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800 text-left py-12 font-sans text-sm">
        <div class="p-4 space-y-1">
          <div class="text-xs text-slate-400">// THÀNH LẬP</div>
          <div class="text-xl font-bold">2015</div>
        </div>
        <div class="p-4 space-y-1">
          <div class="text-xs text-slate-400">// THÀNH VIÊN</div>
          <div class="text-xl font-bold">50+ Chuyên gia</div>
        </div>
        <div class="p-4 space-y-1">
          <div class="text-xs text-slate-400">// HOÀN THÀNH</div>
          <div class="text-xl font-bold">350+ Dự án</div>
        </div>
        <div class="p-4 space-y-1">
          <div class="text-xs text-slate-400">// VĂN PHÒNG</div>
          <div class="text-xl font-bold">Hà Nội & TP. HCM</div>
        </div>
      </section>

      <!-- Services Section -->
      <section id="services" class="py-24 max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
          <h2 class="text-xs uppercase tracking-widest text-slate-400">// DỊCH VỤ CUNG CẤP</h2>
          <p class="text-xl font-bold font-sans">Cấu trúc nghiệp vụ tinh gọn</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(service, idx) in services" :key="idx" 
            class="p-8 border border-slate-200 dark:border-slate-850 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-left space-y-4">
            <div class="text-slate-400 text-xs">// 0{{ idx + 1 }}</div>
            <h3 class="text-base font-bold font-sans uppercase tracking-wider">{{ service.title }}</h3>
            <p class="text-xs leading-relaxed font-sans text-slate-500 dark:text-slate-400">{{ service.desc }}</p>
          </div>
        </div>
      </section>

      <!-- Core Values Minimal List -->
      <section class="py-24 max-w-7xl mx-auto px-6 sm:px-12 border-t border-b border-slate-200 dark:border-slate-800">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div class="lg:col-span-4 space-y-4 text-left">
            <h2 class="text-xs text-slate-400 tracking-widest">// NGUYÊN TẮC CỐT LÕI</h2>
            <p class="text-2xl font-bold font-sans">Chúng tôi tuân thủ nghiêm ngặt</p>
          </div>
          <div class="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left font-sans text-xs">
            <div class="space-y-2">
              <div class="font-bold uppercase tracking-wider text-slate-900 dark:text-white">01 / MINH BẠCH TUYỆT ĐỐI</div>
              <p class="text-slate-500 dark:text-slate-400 leading-relaxed">Mọi quy trình báo cáo, hoạt động nghiệp vụ đều được minh bạch hóa rõ ràng.</p>
            </div>
            <div class="space-y-2">
              <div class="font-bold uppercase tracking-wider text-slate-900 dark:text-white">02 / ĐƠN GIẢN HÓA THỦ TỤC</div>
              <p class="text-slate-500 dark:text-slate-400 leading-relaxed">Loại bỏ tất cả các bước trung gian lãng phí nhằm đẩy nhanh tiến độ bàn giao.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-24 max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-6 text-left">
          <h2 class="text-xs uppercase tracking-widest text-slate-400">// GIỚI THIỆU DOANH NGHIỆP</h2>
          <p class="text-sm leading-relaxed font-sans text-slate-605 dark:text-slate-350 text-base">
            {{ companyInfo.about_us || 'Chúng tôi xây dựng các giải pháp dựa trên dữ liệu và quy trình chặt chẽ, không màu mè, hướng tới sự hiệu quả bền bỉ.' }}
          </p>
        </div>
        <div>
          <img :src="aboutImage" alt="Minimalist About" class="w-full h-80 object-cover border border-slate-350 dark:border-slate-800 filter grayscale hover:grayscale-0 transition-all" />
        </div>
      </section>
    </main>

    <!-- Style 4: Vibrant Creative -->
    <main v-else-if="activeStyle === 'style4'" class="w-full bg-slate-50 dark:bg-slate-950">
      <!-- Hero Section -->
      <section class="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7 space-y-8 text-left relative z-10">
          <span class="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 text-pink-650 dark:text-pink-400 text-xs font-extrabold uppercase tracking-wider border border-pink-500/20">
            🚀 {{ businessFieldLabel }}
          </span>
          <h1 class="text-5xl sm:text-7xl font-black tracking-tight leading-none text-slate-900 dark:text-white">
            {{ companyInfo.slogan_1 || 'Đột phá ý tưởng' }}
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500">
              {{ companyInfo.slogan_2 || 'Bùng nổ tiềm năng' }}
            </span>
          </h1>
          <p class="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
            {{ companyInfo.slogan_3 || 'Sáng tạo không giới hạn để mang lại giải pháp đột phá, thúc đẩy sự hiện diện thương hiệu của bạn một cách ngoạn mục.' }}
          </p>
          <div class="flex gap-4">
            <a href="#services" class="px-8 py-4 rounded-[2rem] bg-gradient-to-r from-pink-500 to-purple-500 text-white font-extrabold text-sm shadow-xl shadow-pink-500/20 hover:scale-105 hover:shadow-2xl transition-all">
              Bắt đầu ngay
            </a>
          </div>
        </div>

        <!-- Banner Right Carousel Vibrant -->
        <div class="lg:col-span-5 relative group">
          <div class="absolute -inset-2 bg-gradient-to-tr from-pink-500 to-purple-500 rounded-[2.5rem] blur-xl opacity-20"></div>
          <div class="relative z-10 w-full aspect-[4/3] rounded-[2.5rem] shadow-2xl overflow-hidden bg-white dark:bg-slate-900 border-4 border-white dark:border-slate-800">
            <div v-for="(slide, idx) in slides" :key="idx" 
              class="absolute inset-0 transition-all duration-700 ease-in-out transform"
              :class="[idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none']">
              <img :src="slide" alt="Vibrant Slide" class="w-full h-full object-cover" />
            </div>

            <!-- Controls -->
            <button @click="prevSlide" class="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 shadow-md">
              <i class="pi pi-chevron-left text-xs"></i>
            </button>
            <button @click="nextSlide" class="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 shadow-md">
              <i class="pi pi-chevron-right text-xs"></i>
            </button>

            <!-- Indicators -->
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
              <button v-for="(_, idx) in slides" :key="idx" 
                @click="setSlide(idx)" 
                class="w-1.5 h-1.5 rounded-full transition-all"
                :class="idx === currentSlide ? 'bg-pink-500 w-4' : 'bg-slate-350 dark:bg-slate-650'">
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section id="services" class="py-24 bg-purple-50/50 dark:bg-purple-950/20">
        <div class="max-w-7xl mx-auto px-6 sm:px-12 text-center space-y-16">
          <div class="max-w-xl mx-auto space-y-3">
            <span class="text-xs font-extrabold text-pink-500 uppercase tracking-widest">Sản phẩm sáng tạo</span>
            <h2 class="text-3xl font-black text-slate-900 dark:text-white">Ý tưởng tạo nên thành công</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="(service, idx) in services" :key="idx" 
              class="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center space-y-6">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-500 to-orange-400 text-white flex items-center justify-center text-xl font-black mx-auto shadow-md">
                {{ idx + 1 }}
              </div>
              <h3 class="text-lg font-extrabold text-slate-900 dark:text-white">{{ service.title }}</h3>
              <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{{ service.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Creative stats counter -->
      <section class="py-16 bg-white dark:bg-slate-900">
        <div class="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="p-8 rounded-3xl bg-pink-500/5 dark:bg-pink-500/10 border border-pink-500/10 text-center space-y-2 hover:scale-105 transition-all">
            <div class="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">100%</div>
            <div class="text-xs font-bold uppercase text-slate-500 dark:text-slate-450 tracking-wider">Độc đáo & Phá cách</div>
          </div>
          <div class="p-8 rounded-3xl bg-purple-500/5 dark:bg-purple-500/10 border border-purple-500/10 text-center space-y-2 hover:scale-105 transition-all">
            <div class="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">50M+</div>
            <div class="text-xs font-bold uppercase text-slate-500 dark:text-slate-455 tracking-wider">Lượt tiếp cận chiến dịch</div>
          </div>
          <div class="p-8 rounded-3xl bg-orange-500/5 dark:bg-orange-500/10 border border-orange-500/10 text-center space-y-2 hover:scale-105 transition-all">
            <div class="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">80+</div>
            <div class="text-xs font-bold uppercase text-slate-500 dark:text-slate-455 tracking-wider">Giải thưởng Sáng tạo</div>
          </div>
          <div class="p-8 rounded-3xl bg-rose-500/5 dark:bg-rose-500/10 border border-rose-500/10 text-center space-y-2 hover:scale-105 transition-all">
            <div class="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-500">150+</div>
            <div class="text-xs font-bold uppercase text-slate-500 dark:text-slate-455 tracking-wider">Thành viên toàn cầu</div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-24 max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div class="lg:col-span-5">
          <img :src="aboutImage" alt="Vibrant About" class="w-full h-auto rounded-[2.5rem] shadow-xl object-cover aspect-[4/3] border-4 border-white dark:border-slate-800" />
        </div>
        <div class="lg:col-span-7 space-y-6 text-left">
          <span class="text-xs font-black text-pink-500 uppercase tracking-widest">VỀ CHÚNG TÔI</span>
          <h3 class="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Chúng tôi mang tư duy thiết kế vào thực tế</h3>
          <p class="text-slate-650 dark:text-slate-400 leading-relaxed text-base">
            {{ companyInfo.about_us || 'Chúng tôi khao khát nâng cấp trải nghiệm người dùng cuối thông qua các công nghệ đột phá. Từng dự án là một kiệt tác riêng biệt được đầu tư tỉ mỉ.' }}
          </p>
        </div>
      </section>
    </main>

    <!-- Style 5: Trust Corporate -->
    <main v-else-if="activeStyle === 'style5'" class="w-full bg-slate-50 dark:bg-slate-950">
      <!-- Hero Section -->
      <section class="bg-slate-900 text-white py-28 px-6 sm:px-12 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute inset-0 bg-repeat bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div class="lg:col-span-7 space-y-6 text-left">
            <span class="inline-block px-3 py-1 rounded bg-slate-850 text-slate-300 text-xs font-bold uppercase tracking-wider border border-slate-700">
              LĨNH VỰC: {{ businessFieldLabel }}
            </span>
            <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              {{ companyInfo.slogan_1 || 'Đối tác tin cậy phát triển vững chắc' }}
              <span class="block text-primary">
                {{ companyInfo.slogan_2 || 'Đồng hành cùng sự thịnh vượng' }}
              </span>
            </h1>
            <p class="text-slate-300 text-base leading-relaxed max-w-xl">
              {{ companyInfo.slogan_3 || 'Chúng tôi cung cấp hệ thống dịch vụ quy chuẩn, bảo vệ sự tuân thủ tối đa, định hình thành công phát triển ổn định.' }}
            </p>
            <div class="flex gap-4 pt-2">
              <a href="#services" class="px-8 py-3.5 rounded bg-primary hover:bg-primary/95 text-white font-bold text-sm shadow-lg transition-all">
                Đăng ký Tư văn
              </a>
            </div>
          </div>
          <!-- Banner Right Carousel Corporate -->
          <div class="lg:col-span-5 relative group">
            <div class="relative w-full aspect-[4/3] rounded overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl">
              <div v-for="(slide, idx) in slides" :key="idx" 
                class="absolute inset-0 transition-all duration-700 ease-in-out transform"
                :class="[idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none']">
                <img :src="slide" alt="Corporate Slide" class="w-full h-full object-cover" />
              </div>

              <!-- Controls -->
              <button @click="prevSlide" class="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded bg-slate-900/95 border border-slate-700 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 shadow">
                <i class="pi pi-chevron-left text-xs"></i>
              </button>
              <button @click="nextSlide" class="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded bg-slate-900/95 border border-slate-700 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 shadow">
                <i class="pi pi-chevron-right text-xs"></i>
              </button>

              <!-- Indicators -->
              <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                <button v-for="(_, idx) in slides" :key="idx" 
                  @click="setSlide(idx)" 
                  class="w-2.5 h-1 rounded transition-all"
                  :class="idx === currentSlide ? 'bg-primary w-5' : 'bg-slate-500'">
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section id="services" class="py-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div class="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
          <div class="text-center space-y-4">
            <span class="text-xs font-bold text-primary uppercase tracking-widest">Dịch vụ Quy chuẩn</span>
            <h2 class="text-3xl font-extrabold text-slate-900 dark:text-white">Chuyên nghiệp & Minh bạch</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="(service, idx) in services" :key="idx" 
              class="p-8 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800 hover:border-primary hover:shadow-xl transition-all duration-300 text-left space-y-4">
              <div class="w-12 h-12 rounded bg-primary/10 text-primary flex items-center justify-center text-xl font-bold">
                0{{ idx + 1 }}
              </div>
              <h3 class="text-lg font-bold text-slate-900 dark:text-white">{{ service.title }}</h3>
              <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{{ service.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Corporate Partners logo -->
      <section class="py-12 bg-slate-100 dark:bg-slate-950/40">
        <div class="max-w-7xl mx-auto px-6 sm:px-12 flex flex-wrap justify-between items-center gap-8 opacity-50 dark:opacity-40">
          <div class="text-sm font-bold uppercase tracking-widest text-slate-500">Đối tác liên kết:</div>
          <div class="font-extrabold tracking-tight">VCCI HOLDINGS</div>
          <div class="font-extrabold tracking-tight">PETROVIETNAM</div>
          <div class="font-extrabold tracking-tight">VIETCOMBANK</div>
          <div class="font-extrabold tracking-tight">VINGROUP</div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-24 max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div class="lg:col-span-5">
          <img :src="aboutImage" alt="Corporate About" class="w-full h-auto rounded border border-slate-200 dark:border-slate-800 shadow-xl object-cover aspect-[4/3]" />
        </div>
        <div class="lg:col-span-7 space-y-6 text-left">
          <span class="text-xs font-bold text-primary uppercase tracking-widest">Giá trị nền tảng</span>
          <h3 class="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Cam kết phát triển vững bền</h3>
          <p class="text-slate-650 dark:text-slate-400 leading-relaxed text-base">
            {{ companyInfo.about_us || 'Mục tiêu tối thượng của chúng tôi là củng cố độ tin cậy vận hành, tối thiểu hóa rủi ro, xây dựng mối liên kết bền vững trọn đời với các đối tác của mình.' }}
          </p>
        </div>
      </section>
    </main>

    <!-- Collaboration Process Section -->
    <section class="py-24 border-t transition-colors duration-500" :class="processSectionClass">
      <div class="max-w-7xl mx-auto px-6 sm:px-12 text-center space-y-16">
        <div class="max-w-2xl mx-auto space-y-4">
          <span class="text-xs font-black uppercase tracking-widest text-primary">Quy trình vận hành</span>
          <h2 class="text-4xl font-extrabold tracking-tight" :class="textTitleClass">Các bước hợp tác chuyên nghiệp</h2>
          <p class="text-sm leading-relaxed" :class="textMutedClass">
            Chúng tôi tuân thủ quy trình chuẩn mực nhằm mang lại sự minh bạch, an toàn và tối ưu hiệu suất tốt nhất cho từng dự án của đối tác.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <!-- Connection lines for modern design (Desktop only) -->
          <div class="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-0.5 border-t border-dashed -translate-y-8 z-0" :class="processLineClass"></div>
          
          <!-- Step 1 -->
          <div class="p-8 relative z-10 transition-all duration-300 group text-left space-y-5" :class="processCardClass">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black transition-all duration-300" :class="processStepBadgeClass">
              01
            </div>
            <div class="space-y-2">
              <h3 class="text-lg font-bold tracking-tight">Tiếp nhận & Khảo sát</h3>
              <p class="text-xs leading-relaxed" :class="textMutedClass">
                Lắng nghe nhu cầu, khảo sát thực trạng chi tiết để định vị chính xác vấn đề cốt lõi của doanh nghiệp.
              </p>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="p-8 relative z-10 transition-all duration-300 group text-left space-y-5" :class="processCardClass">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black transition-all duration-300" :class="processStepBadgeClass">
              02
            </div>
            <div class="space-y-2">
              <h3 class="text-lg font-bold tracking-tight">Đề xuất Giải pháp</h3>
              <p class="text-xs leading-relaxed" :class="textMutedClass">
                Thiết kế lộ trình triển khai chi tiết, mô hình hóa giải pháp tối ưu kèm dự toán chi phí minh bạch.
              </p>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="p-8 relative z-10 transition-all duration-300 group text-left space-y-5" :class="processCardClass">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black transition-all duration-300" :class="processStepBadgeClass">
              03
            </div>
            <div class="space-y-2">
              <h3 class="text-lg font-bold tracking-tight">Triển khai chuẩn mực</h3>
              <p class="text-xs leading-relaxed" :class="textMutedClass">
                Tiến hành phát triển, lập trình hoặc gia công dịch vụ, kiểm thử chất lượng gắt gao theo tiêu chuẩn.
              </p>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="p-8 relative z-10 transition-all duration-300 group text-left space-y-5" :class="processCardClass">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black transition-all duration-300" :class="processStepBadgeClass">
              04
            </div>
            <div class="space-y-2">
              <h3 class="text-lg font-bold tracking-tight">Bàn giao & Đồng hành</h3>
              <p class="text-xs leading-relaxed" :class="textMutedClass">
                Đào tạo vận hành chuyển giao công nghệ, đồng hành hỗ trợ kỹ thuật bảo trì định kỳ trọn đời.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Unified Contact Section -->
    <section id="contact" class="py-24 border-t transition-colors duration-500" :class="contactClass">
      <div class="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        <!-- Contact Info Col (5 columns wide) -->
        <div class="lg:col-span-5 space-y-8 text-left">
          <div class="space-y-4">
            <span class="text-xs font-black uppercase tracking-widest text-primary">Thông tin kết nối</span>
            <h2 class="text-3xl font-black tracking-tight" :class="textTitleClass">Liên hệ với chúng tôi</h2>
            <p class="text-sm leading-relaxed" :class="textMutedClass">
              Gửi yêu cầu tư vấn hoặc bất cứ thắc mắc nào của bạn, đội ngũ chuyên gia của chúng tôi sẽ liên hệ và phản hồi sớm nhất có thể.
            </p>
          </div>
          
          <div class="space-y-5 text-sm font-semibold">
            <div class="flex items-center gap-4 group">
              <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg shrink-0 transition-transform group-hover:scale-110">
                <i class="pi pi-envelope"></i>
              </div>
              <div class="space-y-0.5">
                <span class="text-[10px] uppercase tracking-wider block" :class="textMutedClass">Hòm thư điện tử</span>
                <span class="text-base truncate block max-w-xs sm:max-w-sm">{{ companyInfo.email || 'contact@mycompany.com' }}</span>
              </div>
            </div>
            
            <div class="flex items-center gap-4 group">
              <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg shrink-0 transition-transform group-hover:scale-110">
                <i class="pi pi-phone"></i>
              </div>
              <div class="space-y-0.5">
                <span class="text-[10px] uppercase tracking-wider block" :class="textMutedClass">Số điện thoại liên lạc</span>
                <span class="text-base">{{ companyInfo.phone_number || '+84 (0) 123 456 789' }}</span>
              </div>
            </div>
            
            <div class="flex items-center gap-4 group">
              <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg shrink-0 transition-transform group-hover:scale-110">
                <i class="pi pi-map-marker"></i>
              </div>
              <div class="space-y-0.5">
                <span class="text-[10px] uppercase tracking-wider block" :class="textMutedClass">Địa chỉ trụ sở</span>
                <span class="text-base leading-normal">{{ companyInfo.address || 'Hanoi, Vietnam' }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form Card (7 columns wide) -->
        <div class="lg:col-span-7 w-full">
          <div class="transition-all duration-300" :class="contactCardClass">
            <h3 class="text-xl font-bold tracking-tight mb-6" :class="textTitleClass">Để lại tin nhắn trực tuyến</h3>
            <div class="space-y-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div class="space-y-2">
                  <label class="text-xs font-bold uppercase tracking-wider" :class="textMutedClass">Họ và tên</label>
                  <InputText placeholder="Nguyễn Văn A" class="w-full !rounded-xl !py-3 !px-4" :class="contactInputClass" />
                </div>
                <div class="space-y-2">
                  <label class="text-xs font-bold uppercase tracking-wider" :class="textMutedClass">Địa chỉ Email</label>
                  <InputText placeholder="name@example.com" class="w-full !rounded-xl !py-3 !px-4" :class="contactInputClass" />
                </div>
              </div>
              <div class="space-y-2">
                <label class="text-xs font-bold uppercase tracking-wider" :class="textMutedClass">Nội dung tin nhắn</label>
                <Textarea placeholder="Tôi muốn tìm hiểu thông tin về dịch vụ của công ty..." rows="4" class="w-full !rounded-xl !py-3 !px-4" :class="contactInputClass" />
              </div>
              <Button label="Gửi yêu cầu liên hệ" class="w-full !rounded-xl !py-3.5 !font-bold transition-all" :class="contactBtnClass" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Premium Footer -->
    <footer class="pt-20 pb-10 border-t transition-colors duration-500" :class="footerClass">
      <div class="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left mb-16">
        <!-- Col 1: Brand & Info -->
        <div class="space-y-6 flex flex-col items-center md:items-start">
          <div class="flex items-center gap-3">
            <img v-if="companyInfo.logo_path" :src="companyInfo.logo_path" alt="Logo" class="h-8 w-auto object-contain" />
            <span class="font-black text-lg tracking-tight" :class="textTitleClass">
              {{ companyInfo.company_name || 'My Company' }}
            </span>
          </div>
          <p class="text-sm leading-relaxed max-w-sm" :class="footerTextMutedClass">
            {{ companyInfo.slogan_3 || 'Chúng tôi cung cấp các giải pháp chuyên nghiệp, mang lại sự phát triển vững bền cho đối tác.' }}
          </p>
          <!-- Social links -->
          <div class="flex gap-4 text-base justify-center md:justify-start" :class="footerTextMutedClass">
            <a href="#" class="hover:text-primary transition-colors duration-200"><i class="pi pi-facebook"></i></a>
            <a href="#" class="hover:text-primary transition-colors duration-200"><i class="pi pi-twitter"></i></a>
            <a href="#" class="hover:text-primary transition-colors duration-200"><i class="pi pi-linkedin"></i></a>
            <a href="#" class="hover:text-primary transition-colors duration-200"><i class="pi pi-envelope"></i></a>
          </div>
        </div>

        <!-- Col 2: Quick Links -->
        <div class="space-y-6">
          <h4 class="text-xs font-black uppercase tracking-widest" :class="footerSubTitleClass">Liên kết nhanh</h4>
          <ul class="space-y-3 text-sm font-semibold" :class="footerTextMutedClass">
            <li><a href="#about" class="hover:text-primary transition-colors duration-200">Về chúng tôi</a></li>
            <li><a href="#services" class="hover:text-primary transition-colors duration-200">Dịch vụ chính</a></li>
            <li><a href="#contact" class="hover:text-primary transition-colors duration-200">Liên hệ tư vấn</a></li>
            <li><NuxtLink to="/login" class="hover:text-primary transition-colors duration-200">Đăng nhập quản trị</NuxtLink></li>
          </ul>
        </div>

        <!-- Col 3: Services -->
        <div class="space-y-6">
          <h4 class="text-xs font-black uppercase tracking-widest" :class="footerSubTitleClass">Dịch vụ chính</h4>
          <ul class="space-y-3 text-sm font-semibold" :class="footerTextMutedClass">
            <li v-for="(service, idx) in services.slice(0, 3)" :key="idx">
              <a href="#services" class="hover:text-primary transition-colors duration-200 truncate block">{{ service.title }}</a>
            </li>
          </ul>
        </div>

        <!-- Col 4: Contact -->
        <div class="space-y-6 flex flex-col items-center md:items-start">
          <h4 class="text-xs font-black uppercase tracking-widest" :class="footerSubTitleClass">Thông tin liên hệ</h4>
          <ul class="space-y-4 text-sm font-semibold w-full flex flex-col items-center md:items-start" :class="footerTextMutedClass">
            <li class="flex flex-col md:flex-row items-center md:items-start gap-2 text-center md:text-left">
              <i class="pi pi-envelope text-primary text-base"></i>
              <span class="break-all">{{ companyInfo.email || 'contact@company.com' }}</span>
            </li>
            <li class="flex flex-col md:flex-row items-center md:items-start gap-2 text-center md:text-left">
              <i class="pi pi-phone text-primary text-base"></i>
              <span>{{ companyInfo.phone_number || '+84 (0) 123 456 789' }}</span>
            </li>
            <li class="flex flex-col md:flex-row items-center md:items-start gap-2 text-center md:text-left">
              <i class="pi pi-map-marker text-primary text-base shrink-0"></i>
              <span class="max-w-[240px] md:max-w-xs">{{ companyInfo.address || 'Hanoi, Vietnam' }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom copyright -->
      <div class="max-w-7xl mx-auto px-6 sm:px-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold" :class="[footerBottomBorderClass, footerTextMutedClass]">
        <div>
          © {{ new Date().getFullYear() }} {{ companyInfo.company_name || 'My Company' }}. All rights reserved.
        </div>
        <div class="flex gap-6">
          <a href="#" class="hover:text-primary transition-colors duration-200">Điều khoản dịch vụ</a>
          <a href="#" class="hover:text-primary transition-colors duration-200">Chính sách bảo mật</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from '#app';
import { useCompanySetting } from '~/composables/master/companySetting';

// Define layout custom (no auth check needed for public landing page)
definePageMeta({
  layout: false
});

const { getCompanySetting } = useCompanySetting();
const route = useRoute();

const companyInfo = ref<any>({
  company_name: "CÔNG TY GIẢI PHÁP CÔNG NGHỆ SỐ",
  email: "contact@digitaltech.com",
  phone_number: "024-3333-8888",
  address: "Tòa nhà Keangnam, Mễ Trì, Nam Từ Liêm, Hà Nội",
  landing_style: "style1",
  business_field: "IT",
  about_us: "",
  services_list: "",
  slogan_1: "",
  slogan_2: "",
  slogan_3: "",
  logo_path: "",
  slide_image_1: "",
  slide_image_2: "",
  slide_image_3: "",
  about_image_path: "",
});

const fetchSettings = () => {
  getCompanySetting({
    successCallback: (res: any) => {
      const data = res?.data?.data || res?.data;
      if (data) {
        Object.assign(companyInfo.value, data);
        if (data.has_website && data.website) {
          window.location.href = data.website;
        }
      }
    },
    errorCallback: () => {
      // Keep default mockup values
    }
  });
};

const currentSlide = ref(0);
const isMobileMenuOpen = ref(false);
let slideInterval: any = null;

const slides = computed(() => {
  const customSlides = [
    companyInfo.value.slide_image_1,
    companyInfo.value.slide_image_2,
    companyInfo.value.slide_image_3
  ].filter(s => !!s);

  if (customSlides.length > 0) return customSlides;

  // Fallback slides based on field
  const field = companyInfo.value.business_field || 'IT';
  const maps: Record<string, string[]> = {
    'IT': [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80'
    ],
    'FINANCE': [
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80'
    ],
    'MANUFACTURING': [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80'
    ],
    'LEGAL': [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=80'
    ],
    'SERVICES': [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80'
    ]
  };
  return maps[field] || maps['IT'];
});

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const setSlide = (idx: number) => {
  currentSlide.value = idx;
};

onMounted(() => {
  fetchSettings();
  slideInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length;
  }, 5000);
});

onUnmounted(() => {
  if (slideInterval) clearInterval(slideInterval);
});

// Computed active style
const activeStyle = computed(() => {
  const queryStyle = route.query.style as string;
  if (queryStyle && ['style1', 'style2', 'style3', 'style4', 'style5'].includes(queryStyle)) {
    return queryStyle;
  }
  return companyInfo.value.landing_style || 'style1';
});

// Labels
const businessFieldLabel = computed(() => {
  const field = companyInfo.value.business_field || 'IT';
  const maps: Record<string, string> = {
    'IT': 'CÔNG NGHỆ THÔNG TIN & PHẦN MỀM',
    'FINANCE': 'DỊCH VỤ TÀI CHÍNH & KẾ TOÁN',
    'MANUFACTURING': 'SẢN XUẤT & XUẤT NHẬP KHẨU',
    'LEGAL': 'TƯ VẤN PHÁP LÝ & LUẬT SƯ',
    'SERVICES': 'DỊCH VỤ & THƯƠNG MẠI CHUYÊN NGHIỆP'
  };
  return maps[field] || maps['IT'];
});

// Dynamic default images based on field
const heroImage = computed(() => {
  if (companyInfo.value.background_path) return companyInfo.value.background_path;
  const field = companyInfo.value.business_field || 'IT';
  const maps: Record<string, string> = {
    'IT': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    'FINANCE': 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80',
    'MANUFACTURING': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    'LEGAL': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    'SERVICES': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
  };
  return maps[field] || maps['IT'];
});

const aboutImage = computed(() => {
  if (companyInfo.value.about_image_path) return companyInfo.value.about_image_path;
  const field = companyInfo.value.business_field || 'IT';
  const maps: Record<string, string> = {
    'IT': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    'FINANCE': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    'MANUFACTURING': 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    'LEGAL': 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    'SERVICES': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80'
  };
  return maps[field] || maps['IT'];
});

// Fallback services
const defaultServices = computed(() => {
  const field = companyInfo.value.business_field || 'IT';
  const maps: Record<string, Array<{ title: string, desc: string }>> = {
    'IT': [
      { title: "Phát triển phần mềm", desc: "Thiết kế và xây dựng các hệ thống quản trị, ứng dụng di động chất lượng cao." },
      { title: "Tích hợp Cloud & AI", desc: "Hiện đại hóa hạ tầng công nghệ và áp dụng trí tuệ nhân tạo tối ưu vận hành." },
      { title: "Bảo mật & Tuân thủ", desc: "Bảo vệ tài sản số tuyệt đối và đảm bảo tính tuân thủ tiêu chuẩn quốc tế." }
    ],
    'FINANCE': [
      { title: "Tư vấn đầu tư & Quản lý", desc: "Xây dựng chiến lược tài chính toàn diện nhằm tối đa hóa lợi nhuận." },
      { title: "Kế toán & Kiểm toán", desc: "Quản lý dòng tiền, quyết toán thuế chuẩn xác, minh bạch theo luật định." },
      { title: "Phòng ngừa Rủi ro", desc: "Phân tích thị trường nhằm dự báo và giảm thiểu các rủi ro tài chính." }
    ],
    'MANUFACTURING': [
      { title: "Chế tạo & Lắp ráp", desc: "Dây chuyền tự động hóa cao cung cấp sản phẩm chuẩn xác, bền bỉ." },
      { title: "Chuỗi cung ứng & Kho", desc: "Vận chuyển, xuất nhập khẩu, kiểm soát lưu kho hiệu quả tối đa." },
      { title: "Kiểm định chất lượng", desc: "Quy trình QC nghiêm ngặt bảo đảm mọi lô hàng xuất xưởng đạt tiêu chuẩn." }
    ],
    'LEGAL': [
      { title: "Tư vấn Pháp chế", desc: "Đồng hành pháp lý trọn đời cho doanh nghiệp trong giao dịch ký kết." },
      { title: "Bảo hộ Sở hữu trí tuệ", desc: "Đăng ký thương hiệu, sáng chế bảo vệ bản quyền tác giả toàn cầu." },
      { title: "Giải quyết tranh chấp", desc: "Đại diện đàm phán, xử lý tranh chấp thương mại chuyên nghiệp." }
    ],
    'SERVICES': [
      { title: "Chăm sóc Khách hàng", desc: "Đội ngũ chuyên nghiệp trực tuyến 24/7 tối ưu hóa tỷ lệ chuyển đổi." },
      { title: "Tư vấn Vận hành", desc: "Đào tạo nhân sự, setup quy trình nâng cao hiệu suất làm việc đội ngũ." },
      { title: "Quản trị Thương hiệu", desc: "Truyền thông tích hợp định vị vững chắc sản phẩm trên thị trường." }
    ]
  };
  return maps[field] || maps['IT'];
});

// Dynamic services parsing
const services = computed(() => {
  if (companyInfo.value.services_list) {
    const lines = companyInfo.value.services_list.split('\n').filter((l: string) => l.trim().length > 0);
    return lines.map((line: string) => {
      const parts = line.split(':');
      if (parts.length >= 2) {
        return {
          title: parts[0].trim(),
          desc: parts.slice(1).join(':').trim()
        };
      }
      return {
        title: line.trim(),
        desc: "Dịch vụ uy tín, cam kết chất lượng chuẩn đầu ra chuyên nghiệp."
      };
    });
  }
  return defaultServices.value;
});

// Theme Class map
const styleThemeClass = computed(() => {
  const maps: Record<string, string> = {
    'style1': 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200',
    'style2': 'bg-[#fcfaf5] dark:bg-stone-900 text-stone-850 dark:text-stone-200',
    'style3': 'bg-white dark:bg-black text-slate-900 dark:text-slate-100',
    'style4': 'bg-gradient-to-tr from-rose-50/20 via-purple-50/20 to-orange-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-800 dark:text-slate-200',
    'style5': 'bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200'
  };
  return maps[activeStyle.value] || maps['style1'];
});

// Nav Class map
const navClass = computed(() => {
  const maps: Record<string, string> = {
    'style1': 'border-slate-100 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md sticky top-0 z-50',
    'style2': 'border-amber-950/10 bg-[#fcfaf5]/80 dark:bg-stone-900/80 backdrop-blur-md sticky top-0 z-50',
    'style3': 'border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-black/60 backdrop-blur-md sticky top-0 z-50',
    'style4': 'border-pink-500/10 bg-white/40 dark:bg-slate-950/40 backdrop-blur-md sticky top-0 z-50',
    'style5': 'border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md sticky top-0 z-50'
  };
  return maps[activeStyle.value] || maps['style1'];
});

// Title Text color class
const textTitleClass = computed(() => {
  const maps: Record<string, string> = {
    'style1': 'text-indigo-600 dark:text-indigo-400',
    'style2': 'text-amber-800 dark:text-amber-500 font-serif font-bold',
    'style3': 'text-black dark:text-white font-mono',
    'style4': 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-extrabold',
    'style5': 'text-slate-900 dark:text-white font-bold'
  };
  return maps[activeStyle.value] || maps['style1'];
});

const textMutedClass = computed(() => {
  const maps: Record<string, string> = {
    'style2': 'text-stone-500 dark:text-stone-400',
    'style3': 'text-slate-400 font-mono',
    'style5': 'text-slate-500'
  };
  return maps[activeStyle.value] || 'text-slate-500 dark:text-slate-400';
});

// CTA class
const ctaBtnClass = computed(() => {
  const maps: Record<string, string> = {
    'style1': 'border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white bg-indigo-500/5',
    'style2': 'border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-serif uppercase tracking-wider',
    'style3': 'border-slate-900 dark:border-slate-100 text-slate-900 dark:text-slate-100 hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-black font-mono',
    'style4': 'border-pink-500 text-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white rounded-[2rem]',
    'style5': 'border-primary text-primary hover:bg-primary hover:text-white'
  };
  return maps[activeStyle.value] || maps['style1'];
});

// Footer Class map
const footerClass = computed(() => {
  const maps: Record<string, string> = {
    'style1': 'bg-slate-950 text-slate-200 border-slate-900',
    'style2': 'bg-[#1a1816] dark:bg-[#100f0e] text-stone-200 border-stone-850 font-sans',
    'style3': 'bg-black text-slate-200 border-slate-900 font-mono',
    'style4': 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-200 border-pink-500/10',
    'style5': 'bg-slate-900 text-slate-200 border-slate-800'
  };
  return maps[activeStyle.value] || maps['style1'];
});

const footerTextMutedClass = computed(() => {
  const maps: Record<string, string> = {
    'style1': 'text-slate-400',
    'style2': 'text-stone-400',
    'style3': 'text-slate-400 font-mono',
    'style4': 'text-slate-400',
    'style5': 'text-slate-400'
  };
  return maps[activeStyle.value] || maps['style1'];
});

const footerSubTitleClass = computed(() => {
  const maps: Record<string, string> = {
    'style1': 'text-indigo-400',
    'style2': 'text-amber-500 font-serif font-bold',
    'style3': 'text-white font-mono',
    'style4': 'text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-extrabold',
    'style5': 'text-white'
  };
  return maps[activeStyle.value] || maps['style1'];
});

const footerBottomBorderClass = computed(() => {
  const maps: Record<string, string> = {
    'style1': 'border-slate-900',
    'style2': 'border-stone-850',
    'style3': 'border-slate-900',
    'style4': 'border-pink-500/10',
    'style5': 'border-slate-800'
  };
  return maps[activeStyle.value] || maps['style1'];
});

// Contact Section Styles
const contactClass = computed(() => {
  const maps: Record<string, string> = {
    'style1': 'bg-slate-900 dark:bg-slate-950 text-white border-slate-850',
    'style2': 'bg-[#fcfaf5] dark:bg-stone-900 text-stone-850 dark:text-stone-100 border-amber-900/10 font-sans',
    'style3': 'bg-white dark:bg-black text-black dark:text-white border-slate-200 dark:border-slate-800 font-mono',
    'style4': 'bg-gradient-to-tr from-purple-50/40 via-rose-50/40 to-orange-50/40 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950 text-slate-800 dark:text-slate-200 border-pink-500/10',
    'style5': 'bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-850'
  };
  return maps[activeStyle.value] || maps['style1'];
});

const contactCardClass = computed(() => {
  const maps: Record<string, string> = {
    'style1': 'bg-slate-850/90 dark:bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-indigo-500/15 shadow-xl text-white',
    'style2': 'bg-white dark:bg-stone-950 p-8 rounded-none border border-stone-250 dark:border-stone-800 shadow-md text-stone-850 dark:text-stone-200',
    'style3': 'bg-white dark:bg-black p-8 rounded-none border-2 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] text-black dark:text-white',
    'style4': 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg p-8 rounded-3xl border border-pink-500/10 shadow-[0_20px_50px_rgba(236,72,153,0.06)] text-slate-800 dark:text-slate-100',
    'style5': 'bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-lg text-slate-900 dark:text-slate-100'
  };
  return maps[activeStyle.value] || maps['style1'];
});

const contactInputClass = computed(() => {
  const maps: Record<string, string> = {
    'style1': '!bg-slate-950/40 !border-slate-700/60 text-white focus:!border-indigo-500 focus:!ring-1 focus:!ring-indigo-500/30',
    'style2': '!bg-stone-50/50 dark:!bg-stone-900/50 !border-stone-300 dark:!border-stone-700 !rounded-none focus:!border-amber-800 text-stone-900 dark:text-stone-100',
    'style3': '!bg-transparent !border-2 !border-black dark:!border-white !rounded-none focus:!bg-black focus:!text-white dark:focus:!bg-white dark:focus:!text-black text-black dark:text-white',
    'style4': '!bg-white/50 dark:!bg-slate-950/50 !border-pink-500/20 !rounded-2xl text-slate-800 dark:text-slate-100 focus:!border-pink-500 focus:!ring-2 focus:!ring-pink-500/25',
    'style5': '!bg-slate-50 dark:!bg-slate-950 !border-slate-200 dark:!border-slate-800 !rounded-xl text-slate-800 dark:text-slate-100 focus:!border-primary focus:!ring-1 focus:!ring-primary/30'
  };
  return maps[activeStyle.value] || maps['style1'];
});

const contactBtnClass = computed(() => {
  const maps: Record<string, string> = {
    'style1': '!bg-indigo-600 hover:!bg-indigo-500 !text-white !border-none !rounded-xl hover:shadow-lg hover:shadow-indigo-600/20',
    'style2': '!bg-amber-800 hover:!bg-amber-900 !text-white !border-none !rounded-none !font-serif !uppercase !tracking-widest',
    'style3': '!bg-black dark:!bg-white !text-white dark:!text-black hover:!bg-neutral-800 dark:hover:!bg-neutral-200 !border-2 !border-black dark:!border-white !rounded-none',
    'style4': '!bg-gradient-to-r !from-pink-500 !to-purple-500 hover:!opacity-95 !text-white !border-none !rounded-[2rem] hover:scale-[1.02] active:scale-[0.98]',
    'style5': '!bg-primary hover:!bg-primary/95 !text-white !border-none !rounded-xl'
  };
  return maps[activeStyle.value] || maps['style1'];
});

// Process Section Computed Styles
const processSectionClass = computed(() => {
  const maps: Record<string, string> = {
    'style1': 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-100 dark:border-slate-800',
    'style2': 'bg-[#fcfaf5] dark:bg-stone-900 text-stone-850 dark:text-stone-100 border-amber-900/10 font-sans',
    'style3': 'bg-white dark:bg-black text-black dark:text-white border-slate-200 dark:border-slate-800 font-mono',
    'style4': 'bg-white/40 dark:bg-slate-950/40 text-slate-800 dark:text-slate-200 border-pink-500/10',
    'style5': 'bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800'
  };
  return maps[activeStyle.value] || maps['style1'];
});

const processCardClass = computed(() => {
  const maps: Record<string, string> = {
    'style1': 'bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850 rounded-2xl hover:border-indigo-500/35 hover:shadow-xl hover:-translate-y-1',
    'style2': 'bg-white dark:bg-stone-950 border border-stone-250 dark:border-stone-800 rounded-none hover:border-amber-700 hover:shadow-md',
    'style3': 'border border-black dark:border-white rounded-none hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black',
    'style4': 'bg-white/80 dark:bg-slate-900/85 border border-pink-500/10 rounded-3xl hover:shadow-2xl hover:scale-105',
    'style5': 'bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 rounded-xl hover:border-primary hover:shadow-lg'
  };
  return maps[activeStyle.value] || maps['style1'];
});

const processStepBadgeClass = computed(() => {
  const maps: Record<string, string> = {
    'style1': 'bg-indigo-500/10 text-indigo-650 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white',
    'style2': 'bg-amber-500/10 text-amber-800 dark:text-amber-500 font-serif italic border border-amber-900/10',
    'style3': 'border-2 border-black dark:border-white text-black dark:text-white group-hover:border-white dark:group-hover:border-black group-hover:bg-white dark:group-hover:bg-black group-hover:text-black dark:group-hover:text-white',
    'style4': 'bg-gradient-to-tr from-pink-500 to-orange-400 text-white shadow-md group-hover:rotate-12',
    'style5': 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'
  };
  return maps[activeStyle.value] || maps['style1'];
});

const processLineClass = computed(() => {
  const maps: Record<string, string> = {
    'style1': 'border-indigo-500/30',
    'style2': 'border-amber-900/20',
    'style3': 'border-black dark:border-white',
    'style4': 'border-pink-500/25',
    'style5': 'border-slate-350 dark:border-slate-700'
  };
  return maps[activeStyle.value] || maps['style1'];
});

// Mobile Menu Dropdown Background & Text colors
const mobileMenuClass = computed(() => {
  const maps: Record<string, string> = {
    'style1': 'bg-slate-900 border-slate-800 text-white',
    'style2': 'bg-[#fcfaf5] dark:bg-stone-900 border-amber-950/10 text-stone-900 dark:text-stone-100 font-sans',
    'style3': 'bg-white dark:bg-black border-slate-900 dark:border-white text-slate-800 dark:text-white font-mono',
    'style4': 'bg-white/95 dark:bg-slate-950/95 border-pink-500/10 text-slate-800 dark:text-slate-200',
    'style5': 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-850 dark:text-slate-200'
  };
  return maps[activeStyle.value] || maps['style1'];
});
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
