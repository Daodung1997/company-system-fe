<template>
  <div class="max-w-4xl mx-auto space-y-8 pb-16">
    <!-- Header banner -->
    <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-600 to-primary-800 text-white p-4 sm:p-5 shadow-sm border border-primary-500/10">
      <div class="absolute right-6 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden sm:block">
        <i class="pi pi-megaphone text-[70px] rotate-12"></i>
      </div>
      <div class="relative z-10 flex flex-col gap-1">
        <div class="flex items-center gap-2">
          <span class="p-1 rounded-lg bg-white/10 text-white flex items-center justify-center">
            <i class="pi pi-bell text-xs"></i>
          </span>
          <h1 class="text-base md:text-lg font-extrabold tracking-tight font-display">
            {{ $t('board.title') }}
          </h1>
        </div>
        <p class="text-white/75 text-xs max-w-2xl">
          {{ $t('board.description') }}
        </p>
      </div>
    </div>

    <!-- Tag Filter Bar -->
    <div class="flex items-center justify-between gap-4 flex-wrap bg-white dark:bg-surface-900 p-4 rounded-xl border border-surface-200 dark:border-surface-800 shadow-sm">
      <div class="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none w-full md:w-auto">
        <button
          v-for="tagFilter in tagFilters"
          :key="tagFilter.value"
          @click="selectTagFilter(tagFilter.value)"
          class="px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 whitespace-nowrap border cursor-pointer"
          :class="[
            activeTagFilter === tagFilter.value
              ? tagFilter.activeClass
              : 'bg-surface-50 dark:bg-surface-800 border-surface-200 dark:border-surface-700 text-surface-600 dark:text-surface-300 hover:border-surface-300 dark:hover:border-surface-600'
          ]"
        >
          <span v-if="tagFilter.color" class="w-2 h-2 rounded-full" :class="tagFilter.color"></span>
          {{ tagFilter.label }}
        </button>
      </div>
      
      <!-- Quick Info / Counter -->
      <div class="text-xs text-surface-400 font-bold hidden md:block">
        {{ $t('btn.total') }}: {{ posts.length }} {{ $t('btn.entries') }}
      </div>
    </div>

    <!-- Create Post Form Card (ADMIN & MANAGER only) -->
    <div 
      v-if="isCreatorRole" 
      class="bg-white dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-md overflow-hidden transition-all duration-500 hover:shadow-lg"
    >
      <div class="p-4 sm:p-5 border-b border-surface-100 dark:border-surface-800 bg-surface-50/50 dark:bg-surface-800/20 flex items-center gap-3">
        <div class="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
          <i class="pi pi-pencil text-sm"></i>
        </div>
        <div>
          <h2 class="font-extrabold text-surface-800 dark:text-surface-100 text-sm">
            {{ $t('board.createPost') }}
          </h2>
          <p class="text-[11px] text-surface-400 font-medium">{{ $t('board.createPostSubtitle') }}</p>
        </div>
      </div>
      
      <form @submit.prevent="submitNewPost" class="p-4 sm:p-5 space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Post Title -->
          <div class="space-y-1.5">
            <label class="text-[11px] font-bold text-surface-500 uppercase tracking-wider">{{ $t('board.postTitle') }} <span class="text-red-500">*</span></label>
            <InputText 
              v-model="newPost.title" 
              required 
              class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
              :placeholder="$t('board.placeholderTitle')" 
            />
          </div>

          <!-- Post Tag -->
          <div class="space-y-1.5">
            <label class="text-[11px] font-bold text-surface-500 uppercase tracking-wider">{{ $t('board.postTag') }}</label>
            <Select
              v-model="newPost.tag"
              :options="tagOptions"
              optionLabel="label"
              optionValue="value"
              :placeholder="$t('board.placeholderTag')"
              class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
            >
              <template #value="slotProps">
                <div v-if="slotProps.value" class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full" :class="getTagDotColor(slotProps.value)"></span>
                  <span class="text-xs font-semibold leading-none">{{ getTagLabel(slotProps.value) }}</span>
                </div>
                <span v-else class="text-xs text-surface-400 font-medium leading-none">{{ slotProps.placeholder }}</span>
              </template>
              <template #option="slotProps">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full" :class="getTagDotColor(slotProps.option.value)"></span>
                  <span class="text-xs font-semibold">{{ slotProps.option.label }}</span>
                </div>
              </template>
            </Select>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Attached Link -->
          <div class="space-y-1.5">
            <label class="text-[11px] font-bold text-surface-500 uppercase tracking-wider">{{ $t('board.postLink') }}</label>
            <div class="relative flex items-center">
              <span class="absolute left-3 flex items-center text-surface-450 dark:text-surface-500 pointer-events-none">
                <i class="pi pi-link text-xs"></i>
              </span>
              <InputText 
                v-model="newPost.link_url" 
                type="url"
                class="w-full pl-10 !rounded-xl border border-surface-200 dark:border-surface-800"
                placeholder="https://example.com/document..." 
              />
            </div>
          </div>

          <!-- Image Upload Input -->
          <div class="space-y-1.5">
            <label class="text-[11px] font-bold text-surface-500 uppercase tracking-wider">{{ $t('board.postImage') }}</label>
            <div class="flex items-center gap-3">
              <input 
                type="file" 
                ref="fileInput" 
                @change="handleFileChange" 
                accept="image/*" 
                class="hidden" 
              />
              <button 
                type="button" 
                @click="triggerFileInput"
                class="px-3 py-2 rounded-xl border border-dashed border-surface-300 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 hover:bg-surface-100 dark:hover:bg-surface-700 text-xs font-bold text-surface-600 dark:text-surface-300 flex items-center gap-2 transition-all duration-300 cursor-pointer"
              >
                <i class="pi pi-image text-xs text-primary"></i>
                {{ selectedFile ? $t('board.changeImage') : $t('board.selectImage') }}
              </button>

              <div v-if="selectedFile" class="flex items-center gap-2 bg-surface-100 dark:bg-surface-800 px-3 py-1.5 rounded-xl border border-surface-200 dark:border-surface-700">
                <span class="text-xs text-surface-600 dark:text-surface-300 max-w-[150px] truncate font-medium">{{ selectedFile.name }}</span>
                <button type="button" @click="clearSelectedFile" class="text-red-500 hover:text-red-700 p-0.5 cursor-pointer">
                  <i class="pi pi-times text-xs"></i>
                </button>
              </div>
            </div>
            
            <!-- Image Preview Box -->
            <div v-if="imagePreviewUrl" class="mt-2 relative inline-block rounded-xl overflow-hidden border border-surface-200 dark:border-surface-700 max-h-32 shadow-sm">
              <img :src="imagePreviewUrl" class="h-28 object-cover rounded-xl" />
            </div>
          </div>
        </div>

        <!-- Post Content -->
        <div class="space-y-1.5">
          <label class="text-[11px] font-bold text-surface-500 uppercase tracking-wider">{{ $t('board.postContent') }} <span class="text-red-500">*</span></label>
          <Textarea 
            v-model="newPost.content" 
            required 
            rows="3" 
            autoResize
            class="w-full !rounded-xl border border-surface-200 dark:border-surface-800" 
            :placeholder="$t('board.placeholderContent')" 
          />
        </div>

        <!-- Submit Button -->
        <div class="flex justify-end pt-1">
          <Button 
            type="submit" 
            :loading="submitting" 
            class="px-4 py-2 !rounded-xl text-xs font-bold bg-primary text-white hover:bg-primary-600 shadow-md shadow-primary/20 transition-all duration-300 flex items-center gap-2"
          >
            <i class="pi pi-send"></i>
            {{ $t('board.submitPost') }}
          </Button>
        </div>
      </form>
    </div>

    <!-- Posts Feed Area -->
    <div v-if="loading && posts.length === 0" class="space-y-6">
      <div v-for="n in 3" :key="n" class="bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm animate-pulse space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-full bg-surface-200 dark:bg-surface-800"></div>
          <div class="space-y-2 flex-1">
            <div class="h-4 bg-surface-200 dark:bg-surface-800 rounded w-1/4"></div>
            <div class="h-3 bg-surface-200 dark:bg-surface-800 rounded w-1/6"></div>
          </div>
        </div>
        <div class="h-5 bg-surface-200 dark:bg-surface-800 rounded w-2/3"></div>
        <div class="space-y-2">
          <div class="h-4 bg-surface-200 dark:bg-surface-800 rounded w-full"></div>
          <div class="h-4 bg-surface-200 dark:bg-surface-800 rounded w-5/6"></div>
        </div>
      </div>
    </div>

    <div v-else-if="posts.length === 0" class="bg-white dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-800 p-12 text-center shadow-sm max-w-lg mx-auto">
      <div class="w-16 h-16 rounded-full bg-surface-50 dark:bg-surface-800 text-surface-400 dark:text-surface-500 flex items-center justify-center mx-auto mb-4 border border-surface-200/50 dark:border-surface-700/50">
        <i class="pi pi-megaphone text-3xl"></i>
      </div>
      <h3 class="text-lg font-extrabold text-surface-700 dark:text-surface-200 mb-1">
        {{ $t('board.noPosts') }}
      </h3>
      <p class="text-sm text-surface-400">
        {{ $t('board.firstToShare') }}
      </p>
    </div>

    <div v-else class="space-y-6">
      <!-- Post Cards list -->
      <div 
        v-for="post in posts" 
        :key="post.id" 
        class="bg-white dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col overflow-hidden"
      >
        <!-- Card Header Info -->
        <div class="p-5 flex items-start justify-between gap-4 border-b border-surface-100 dark:border-surface-800/60">
          <div class="flex items-center gap-3">
            <!-- Author Avatar -->
            <div class="relative">
              <div class="w-11 h-11 rounded-full bg-primary/10 text-primary border border-primary-200 dark:border-primary-800 flex items-center justify-center font-extrabold text-sm overflow-hidden shadow-inner">
                <img v-if="post.author?.avatar" :src="post.author.avatar" class="w-full h-full object-cover" />
                <span v-else>{{ getInitials(post.author?.full_name) }}</span>
              </div>
              <!-- Role badge small indicator dot -->
              <span 
                class="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-surface-900 flex items-center justify-center text-[7px]" 
                :class="post.author?.role === 'ADMIN' ? 'bg-red-500 text-white' : 'bg-amber-500 text-white'"
                :title="post.author?.role"
              >
                <i class="pi text-[6px]" :class="post.author?.role === 'ADMIN' ? 'pi-shield' : 'pi-user'"></i>
              </span>
            </div>
            
            <!-- Author meta info -->
            <div class="leading-tight">
              <div class="flex items-center gap-2">
                <span class="font-extrabold text-surface-800 dark:text-surface-100 text-sm hover:text-primary transition-colors cursor-default">
                  {{ post.author?.full_name || $t('board.systemUser') }}
                </span>
                <span 
                  class="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full"
                  :class="[
                    post.author?.role === 'ADMIN' 
                      ? 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20' 
                      : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                  ]"
                >
                  {{ post.author?.role === 'ADMIN' ? $t('board.authorAdmin') : $t('board.authorManager') }}
                </span>
              </div>
              <span class="text-xs text-surface-400 font-bold">
                {{ post.author?.department_name || $t('board.defaultDept') }} • {{ post.author?.job_title_name || $t('board.defaultTitle') }}
              </span>
            </div>
          </div>

          <!-- Tag & Action column -->
          <div class="flex items-center gap-2">
            <!-- Dynamic Post Tag badge -->
            <span 
              v-if="post.tag" 
              class="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border flex items-center gap-1.5"
              :class="getTagClasses(post.tag)"
            >
              <span class="w-1.5 h-1.5 rounded-full" :class="getTagDotColor(post.tag)"></span>
              {{ getTagLabel(post.tag) }}
            </span>

            <!-- Edit/Delete post options (ADMIN or Owner only) -->
            <div v-if="canManagePost(post)" class="relative ml-1">
              <button 
                @click.stop="toggleActionsDropdown(post.id)"
                class="w-8 h-8 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-400 hover:text-surface-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                <i class="pi pi-ellipsis-h text-sm"></i>
              </button>
              
              <div 
                v-if="activeActionsDropdown === post.id" 
                ref="actionsDropdownRef"
                class="absolute right-0 mt-1 w-36 bg-white dark:bg-surface-850 rounded-xl border border-surface-250 dark:border-surface-700 shadow-xl z-20 py-1"
              >
                <button 
                  @click="openEditDialog(post)"
                  class="w-full px-4 py-2 text-left text-xs font-bold text-surface-600 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-800 hover:text-primary flex items-center gap-2 cursor-pointer"
                >
                  <i class="pi pi-pencil text-xs text-primary"></i>
                  {{ $t('btn.edit') }}
                </button>
                <button 
                  @click="confirmDeletePost(post)"
                  class="w-full px-4 py-2 text-left text-xs font-bold text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 flex items-center gap-2 cursor-pointer"
                >
                  <i class="pi pi-trash text-xs"></i>
                  {{ $t('btn.delete') }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Post Content & Media -->
        <div class="p-5 space-y-4 flex-1">
          <!-- Title -->
          <h3 class="text-lg font-extrabold text-surface-800 dark:text-surface-150 leading-snug">
            {{ post.title }}
          </h3>

          <!-- Text content -->
          <p class="text-sm text-surface-600 dark:text-surface-300 whitespace-pre-line leading-relaxed">
            {{ post.content }}
          </p>

          <!-- Attached URL preview link -->
          <div v-if="post.link_url" class="rounded-xl border border-surface-200 dark:border-surface-800 hover:border-primary/40 overflow-hidden bg-surface-50/50 dark:bg-surface-800/30 transition-all duration-300 group/link">
            <a :href="post.link_url" target="_blank" class="flex items-center justify-between p-4 gap-4 text-xs font-bold text-surface-600 dark:text-surface-300">
              <div class="flex items-center gap-3 min-w-0">
                <div class="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover/link:bg-primary group-hover/link:text-white transition-all duration-300">
                  <i class="pi pi-link"></i>
                </div>
                <div class="min-w-0 leading-tight">
                  <span class="block truncate font-black text-surface-700 dark:text-surface-200 text-xs">{{ post.link_url }}</span>
                  <span class="text-[10px] text-surface-400 font-medium">{{ $t('board.attachedLink') }}</span>
                </div>
              </div>
              <i class="pi pi-arrow-right text-[10px] text-surface-400 group-hover/link:translate-x-1 transition-transform"></i>
            </a>
          </div>

          <!-- Attached post image -->
          <div v-if="post.image_url" class="relative rounded-xl overflow-hidden border border-surface-200 dark:border-surface-800 bg-surface-100 dark:bg-surface-950 shadow-inner group/img cursor-zoom-in" @click="openImageModal(post.image_url)">
            <img :src="post.image_url" class="w-full max-h-[360px] object-cover transition-transform duration-500 group-hover/img:scale-105" />
            <div class="absolute inset-0 bg-black/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center shadow-lg">
                <i class="pi pi-search-plus"></i>
              </div>
            </div>
          </div>
        </div>

        <!-- Post Stats & Footer action row -->
        <div class="px-5 py-3 border-t border-surface-100 dark:border-surface-800/60 bg-surface-50/30 dark:bg-surface-800/10 flex items-center justify-between text-xs text-surface-400 font-bold">
          <!-- Likes and comments counters -->
          <div class="flex items-center gap-4">
            <span class="flex items-center gap-1 cursor-help" v-tooltip.top="getLikesTooltip(post)">
              <i class="pi pi-heart-fill" :class="post.is_liked ? 'text-red-500' : 'text-surface-300 dark:text-surface-700'"></i>
              {{ post.likes_count }} {{ $t('board.likes') }}
            </span>
            <span 
              @click="toggleCommentsSection(post.id)"
              class="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors duration-250"
            >
              <i class="pi pi-comments text-surface-300 dark:text-surface-700"></i>
              {{ post.comments_count }} {{ $t('board.comments') }}
            </span>
          </div>

          <!-- Created Time -->
          <div class="flex items-center gap-1.5 text-xs text-surface-400 font-bold">
            <i class="pi pi-calendar text-[11px]"></i>
            {{ formatRelativeTime(post.created_at) }}
          </div>
        </div>

        <div class="px-5 py-3 border-t border-surface-150 dark:border-surface-800/50 flex items-center gap-2">
          <!-- Like Toggle Button -->
          <button 
            @click="toggleLike(post)" 
            v-tooltip.top="getLikesTooltip(post)"
            class="flex-1 py-2.5 rounded-xl border border-surface-200 dark:border-surface-800 hover:bg-surface-50 dark:hover:bg-surface-800/60 text-xs font-black transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            :class="[
              post.is_liked 
                ? 'bg-red-500/5 dark:bg-red-500/10 border-red-500/35 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20' 
                : 'bg-white dark:bg-surface-900 border-surface-200 dark:border-surface-800 text-surface-500 hover:text-surface-700 dark:hover:text-surface-200'
            ]"
          >
            <i class="pi" :class="post.is_liked ? 'pi-heart-fill scale-110 text-red-500' : 'pi-heart'"></i>
            {{ $t('board.likeBtn') }}
          </button>

          <!-- Comment Expand Button -->
          <button 
            @click="toggleCommentsSection(post.id)"
            class="flex-1 py-2.5 rounded-xl border border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-900 hover:bg-surface-50 dark:hover:bg-surface-800/60 text-xs font-black text-surface-500 hover:text-surface-700 dark:hover:text-surface-200 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <i class="pi pi-comment"></i>
            {{ $t('board.commentBtn') }}
          </button>
        </div>

        <!-- Comments Drawer/Section -->
        <div 
          v-if="expandedComments.includes(post.id)" 
          class="bg-surface-50/50 dark:bg-surface-900/40 border-t border-surface-100 dark:border-surface-800/70 p-5 space-y-4"
        >
          <!-- Comments List -->
          <div v-if="post.comments_loading" class="space-y-3 py-2">
            <div v-for="c in 2" :key="c" class="flex gap-3 animate-pulse">
              <div class="w-8 h-8 rounded-full bg-surface-200 dark:bg-surface-800"></div>
              <div class="flex-1 bg-surface-100 dark:bg-surface-800 rounded-lg p-3 space-y-2">
                <div class="h-3 bg-surface-200 dark:bg-surface-800 rounded w-1/4"></div>
                <div class="h-3 bg-surface-200 dark:bg-surface-800 rounded w-3/4"></div>
              </div>
            </div>
          </div>
          
          <div v-else-if="!post.comments || post.comments.length === 0" class="text-center py-4 text-xs text-surface-400 font-bold">
            {{ $t('board.noComments') }}
          </div>

          <div v-else class="space-y-3.5 max-h-[300px] overflow-y-auto pr-1">
            <div 
              v-for="comment in post.comments" 
              :key="comment.id" 
              class="flex items-start gap-3 group/comment"
            >
              <!-- Comment Avatar -->
              <div class="w-8 h-8 rounded-full bg-primary/10 text-primary border border-primary-200 dark:border-primary-800 flex items-center justify-center font-extrabold text-[11px] overflow-hidden flex-shrink-0">
                <img v-if="comment.author?.avatar" :src="comment.author.avatar" class="w-full h-full object-cover" />
                <span v-else>{{ getInitials(comment.author?.full_name) }}</span>
              </div>

              <!-- Comment Body Bubble -->
              <div class="flex-1 min-w-0">
                <div class="bg-surface-100 dark:bg-surface-800/80 rounded-2xl px-4 py-2.5 relative">
                  <div class="flex items-baseline justify-between gap-4 mb-0.5">
                    <span class="font-extrabold text-surface-800 dark:text-surface-200 text-xs flex flex-wrap items-center gap-1.5">
                      <span>{{ comment.author?.full_name || $t('board.systemEmployee') }}</span>
                      <span v-if="comment.author?.department_name" class="text-[9px] text-primary bg-primary-50 dark:bg-primary-950/40 dark:text-primary-400 px-1.5 py-0.5 rounded-md font-medium">
                        {{ comment.author.department_name }}
                      </span>
                    </span>
                    <span class="text-[9px] text-surface-400 font-bold">
                      {{ formatRelativeTime(comment.created_at) }}
                    </span>
                  </div>
                  <p class="text-xs text-surface-600 dark:text-surface-300 leading-relaxed break-words whitespace-pre-line">
                    {{ comment.content }}
                  </p>

                  <!-- Delete comment trigger (Owner of comment, owner of post, or ADMIN) -->
                  <button 
                    v-if="canDeleteComment(comment, post)"
                    @click="deleteComment(post, comment.id)"
                    class="absolute right-3 top-2.5 opacity-0 group-hover/comment:opacity-100 text-red-500 hover:text-red-700 transition-opacity p-0.5 cursor-pointer"
                    :title="$t('board.deleteComment')"
                  >
                    <i class="pi pi-trash text-[10px]"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Write Comment Area -->
          <div class="flex items-start gap-3 pt-2">
            <div class="w-8 h-8 rounded-full bg-primary/10 text-primary border border-primary-200 dark:border-primary-800 flex items-center justify-center font-extrabold text-[11px] overflow-hidden flex-shrink-0 hidden sm:flex">
              <span>{{ getInitials(userInfo?.full_name) }}</span>
            </div>
            
            <div class="flex-1 flex gap-2">
              <InputText 
                v-model="post.new_comment_text"
                @keyup.enter="submitComment(post)"
                class="w-full p-inputtext-sm"
                :placeholder="$t('board.placeholderComment')" 
              />
              <Button 
                @click="submitComment(post)"
                :loading="post.comment_submitting"
                class="px-4 rounded-xl bg-primary text-white hover:bg-primary-600 flex items-center justify-center cursor-pointer"
              >
                <i class="pi pi-send text-xs"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Load More / Next Page -->
      <div v-if="hasMorePages" class="text-center pt-4">
        <Button 
          @click="loadNextPage" 
          :loading="loadingMore" 
          class="px-6 py-2.5 rounded-full border border-surface-300 dark:border-surface-700 bg-white dark:bg-surface-900 text-surface-700 dark:text-surface-300 hover:bg-surface-50 text-xs font-bold shadow-sm flex items-center gap-2 cursor-pointer mx-auto"
        >
          <i class="pi pi-refresh"></i>
          {{ $t('board.loadMorePosts') }}
        </Button>
      </div>
    </div>

    <!-- Edit Post Dialog Box -->
    <Dialog 
      v-model:visible="displayEditDialog" 
      :header="$t('board.editPost')" 
      modal 
      class="w-full max-w-3xl mx-4"
    >
      <form @submit.prevent="submitUpdatedPost" class="space-y-4 pt-2">
        <div class="space-y-1.5">
          <label class="text-[11px] font-bold text-surface-500 uppercase tracking-wider">{{ $t('board.postTitle') }} <span class="text-red-500">*</span></label>
          <InputText v-model="editPostData.title" required class="w-full !rounded-xl border border-surface-200 dark:border-surface-800" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-1.5">
            <label class="text-[11px] font-bold text-surface-500 uppercase tracking-wider">{{ $t('board.postTag') }}</label>
            <Select
              v-model="editPostData.tag"
              :options="tagOptions"
              optionLabel="label"
              optionValue="value"
              :placeholder="$t('board.placeholderSelectTag')"
              class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
            >
              <template #value="slotProps">
                <div v-if="slotProps.value" class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full" :class="getTagDotColor(slotProps.value)"></span>
                  <span class="text-xs font-semibold leading-none">{{ getTagLabel(slotProps.value) }}</span>
                </div>
                <span v-else class="text-xs text-surface-400 font-medium leading-none">{{ slotProps.placeholder }}</span>
              </template>
              <template #option="slotProps">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full" :class="getTagDotColor(slotProps.option.value)"></span>
                  <span class="text-xs font-semibold">{{ slotProps.option.label }}</span>
                </div>
              </template>
            </Select>
          </div>

          <div class="space-y-1.5">
            <label class="text-[11px] font-bold text-surface-500 uppercase tracking-wider">{{ $t('board.postLink') }}</label>
            <div class="relative flex items-center">
              <span class="absolute left-3 flex items-center text-surface-450 dark:text-surface-500 pointer-events-none">
                <i class="pi pi-link text-xs"></i>
              </span>
              <InputText 
                v-model="editPostData.link_url" 
                type="url" 
                class="w-full pl-10 !rounded-xl border border-surface-200 dark:border-surface-800" 
                placeholder="https://..." 
              />
            </div>
          </div>
        </div>

        <div class="space-y-1.5">
          <label class="text-[11px] font-bold text-surface-500 uppercase tracking-wider">{{ $t('board.postImage') }}</label>
          <div class="space-y-2">
            <!-- Current Image Preview with Remove option -->
            <div v-if="editPostData.current_image_url && !editPostData.remove_image" class="relative inline-block border border-surface-200 dark:border-surface-800 rounded-xl overflow-hidden max-h-32">
              <img :src="editPostData.current_image_url" class="h-28 object-cover rounded-xl" />
              <button 
                type="button" 
                @click="editPostData.remove_image = true"
                class="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-lg cursor-pointer"
                :title="$t('board.removeCurrentImage')"
              >
                <i class="pi pi-trash text-[10px]"></i>
              </button>
            </div>
            
            <div v-if="editPostData.remove_image" class="text-xs text-red-500 font-bold mb-1 flex items-center gap-1">
              <i class="pi pi-info-circle"></i> {{ $t('board.imageWillBeDeleted') }}
              <button type="button" @click="editPostData.remove_image = false" class="text-primary hover:underline ml-2 cursor-pointer">{{ $t('board.restore') }}</button>
            </div>

            <!-- Upload new replacement -->
            <div class="flex items-center gap-3">
              <input type="file" ref="editFileInput" @change="handleEditFileChange" accept="image/*" class="hidden" />
              <button 
                type="button" 
                @click="triggerEditFileInput"
                class="px-3 py-1.5 rounded-xl border border-dashed border-surface-300 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 hover:bg-surface-100 text-xs font-bold text-surface-600 dark:text-surface-300 flex items-center gap-2 cursor-pointer"
              >
                <i class="pi pi-image text-xs text-primary"></i>
                {{ editPostData.image ? $t('board.changeSelectedImage') : $t('board.uploadReplacementImage') }}
              </button>

              <div v-if="editPostData.image" class="flex items-center gap-1.5 bg-surface-100 dark:bg-surface-800 px-2.5 py-1 rounded-xl">
                <span class="text-xs text-surface-600 dark:text-surface-300 max-w-[120px] truncate">{{ editPostData.image.name }}</span>
                <button type="button" @click="clearEditFile" class="text-red-500 hover:text-red-700 cursor-pointer">
                  <i class="pi pi-times text-[10px]"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-1.5">
          <label class="text-[11px] font-bold text-surface-500 uppercase tracking-wider">{{ $t('board.postContent') }} <span class="text-red-500">*</span></label>
          <Textarea v-model="editPostData.content" required rows="3" class="w-full !rounded-xl border border-surface-200 dark:border-surface-800" />
        </div>

        <div class="flex justify-end gap-2 pt-2">
          <Button 
            type="button" 
            :label="$t('btn.cancel')" 
            icon="pi pi-times"
            class="p-button-text p-button-sm font-bold text-surface-500 !rounded-xl" 
            @click="displayEditDialog = false" 
          />
          <Button 
            type="submit" 
            :label="$t('btn.save')" 
            icon="pi pi-check"
            :loading="editSubmitting" 
            class="p-button-sm font-bold bg-primary text-white hover:bg-primary-600 !rounded-xl" 
          />
        </div>
      </form>
    </Dialog>

    <!-- Large Image Zoom Modal -->
    <Dialog 
      v-model:visible="displayImageModal" 
      modal 
      dismissableMask 
      class="w-full max-w-4xl bg-transparent border-0 shadow-none"
      contentClass="p-0 overflow-hidden bg-transparent border-0 shadow-none flex items-center justify-center"
      :showHeader="false"
    >
      <div class="relative w-full h-full flex items-center justify-center">
        <img :src="modalImageUrl" class="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" />
        <button 
          @click="displayImageModal = false"
          class="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center shadow-lg border border-white/20 cursor-pointer"
        >
          <i class="pi pi-times text-lg"></i>
        </button>
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { useI18n } from 'vue-i18n';
import { useApiStore } from '~/stores/api';
import { showMessage } from '~/utils/global';
import { useConfirm } from 'primevue/useconfirm';
import { 
  GET_POSTS, 
  CREATE_POST, 
  UPDATE_POST, 
  DELETE_POST, 
  TOGGLE_LIKE_POST, 
  ADD_COMMENT, 
  DELETE_COMMENT,
  GET_POST_DETAIL
} from '~/apis/board';

const { t } = useI18n();
const apiStore = useApiStore();
const confirm = useConfirm();

// State
const loading = ref(false);
const submitting = ref(false);
const posts = ref<any[]>([]);

// Filter and Pagination State
const activeTagFilter = ref('ALL');
const currentPage = ref(1);
const totalPages = ref(1);
const totalPostsCount = ref(0);
const loadingMore = ref(false);
const hasMorePages = computed(() => currentPage.value < totalPages.value);

// Form refs
const fileInput = ref<HTMLInputElement | null>(null);
const editFileInput = ref<HTMLInputElement | null>(null);
const selectedFile = ref<File | null>(null);
const imagePreviewUrl = ref<string | null>(null);

// New Post state
const newPost = ref({
  title: '',
  content: '',
  link_url: '',
  tag: null as string | null
});

// Dropdowns and dialogs
const activeActionsDropdown = ref<number | null>(null);
const displayEditDialog = ref(false);
const editSubmitting = ref(false);
const editPostData = ref({
  id: 0,
  title: '',
  content: '',
  tag: null as string | null,
  link_url: '',
  current_image_url: null as string | null,
  image: null as File | null,
  remove_image: false
});

// Expanded comments tracker
const expandedComments = ref<number[]>([]);

// Image modal state
const displayImageModal = ref(false);
const modalImageUrl = ref('');

// Tag configuration
const tagOptions = computed(() => [
  { value: 'IMPORTANT', label: t('board.tagImportant') },
  { value: 'ANNOUNCEMENT', label: t('board.tagAnnouncement') },
  { value: 'EVENT', label: t('board.tagEvent') },
  { value: 'NEWS', label: t('board.tagNews') }
]);

const tagFilters = computed(() => [
  { value: 'ALL', label: t('board.allTags'), color: '', activeClass: 'bg-primary/10 border-primary/30 text-primary' },
  { value: 'IMPORTANT', label: t('board.tagImportant'), color: 'bg-red-500', activeClass: 'bg-red-500/10 border-red-500/30 text-red-600 dark:text-red-400' },
  { value: 'ANNOUNCEMENT', label: t('board.tagAnnouncement'), color: 'bg-amber-500', activeClass: 'bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400' },
  { value: 'EVENT', label: t('board.tagEvent'), color: 'bg-blue-500', activeClass: 'bg-blue-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400' },
  { value: 'NEWS', label: t('board.tagNews'), color: 'bg-emerald-500', activeClass: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400' }
]);

// Auth configuration
const userInfo = computed(() => {
  if (process.client) {
    return apiStore.userInfo || JSON.parse(localStorage.getItem("userInfo") || "{}");
  }
  return null;
});

const isCreatorRole = computed(() => {
  const role = userInfo.value?.role;
  return role === 'ADMIN' || role === 'MANAGER';
});

// Methods

/**
 * Fetch posts from backend api.
 */
const fetchPosts = (page = 1, append = false) => {
  if (page === 1) {
    loading.value = true;
  } else {
    loadingMore.value = true;
  }

  const params: any = {
    page,
    limit: 10
  };

  if (activeTagFilter.value !== 'ALL') {
    params.tag = activeTagFilter.value;
  }

  GET_POSTS(
    params,
    (res: any) => {
      loading.value = false;
      loadingMore.value = false;

      // Extract the posts array correctly from paginated response format
      const rawList = res.data?.data?.data || res.data?.data || res.data || [];
      const formatted = Array.isArray(rawList) ? rawList.map((item: any) => ({
        ...item,
        comments_loading: false,
        comment_submitting: false,
        new_comment_text: '',
        liked_by: item.liked_by || []
      })) : [];

      if (append) {
        posts.value = [...posts.value, ...formatted];
      } else {
        posts.value = formatted;
      }

      // Read pagination values from inner data object
      const paginationData = res.data?.data || {};
      currentPage.value = paginationData.current_page || 1;
      totalPages.value = paginationData.last_page || 1;
      totalPostsCount.value = paginationData.total || 0;
    },
    (err: any) => {
      loading.value = false;
      loadingMore.value = false;
      showMessage("error", t('board.failFetch'));
    }
  );
};

const selectTagFilter = (tag: string) => {
  activeTagFilter.value = tag;
  currentPage.value = 1;
  fetchPosts(1, false);
};

const getLikesTooltip = (post: any) => {
  if (!post.liked_by || post.liked_by.length === 0) {
    return t('board.likesNoOne');
  }
  const maxToShow = 5;
  const likedBy = post.liked_by;
  if (likedBy.length <= maxToShow) {
    return t('board.likesBy', { names: likedBy.join(', ') });
  }
  const remaining = likedBy.length - maxToShow;
  return t('board.likesByAndOthers', { names: likedBy.slice(0, maxToShow).join(', '), count: remaining });
};

const loadNextPage = () => {
  if (hasMorePages.value) {
    fetchPosts(currentPage.value + 1, true);
  }
};

// Image helpers
const triggerFileInput = () => {
  fileInput.value?.click();
};

const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    selectedFile.value = target.files[0];
    imagePreviewUrl.value = URL.createObjectURL(target.files[0]);
  }
};

const clearSelectedFile = () => {
  selectedFile.value = null;
  imagePreviewUrl.value = null;
  if (fileInput.value) fileInput.value.value = '';
};

// Edit Dialog Image helpers
const triggerEditFileInput = () => {
  editFileInput.value?.click();
};

const handleEditFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    editPostData.value.image = target.files[0];
  }
};

const clearEditFile = () => {
  editPostData.value.image = null;
  if (editFileInput.value) editFileInput.value.value = '';
};

/**
 * Handle new post submission.
 */
const submitNewPost = () => {
  submitting.value = true;

  const formData = new FormData();
  formData.append('title', newPost.value.title);
  formData.append('content', newPost.value.content);
  
  if (newPost.value.tag) {
    formData.append('tag', newPost.value.tag);
  }
  if (newPost.value.link_url) {
    formData.append('link_url', newPost.value.link_url);
  }
  if (selectedFile.value) {
    formData.append('image', selectedFile.value);
  }

  CREATE_POST(
    formData,
    (res: any) => {
      submitting.value = false;
      showMessage("success", t('board.successCreate'));
      
      // Reset form
      newPost.value = {
        title: '',
        content: '',
        link_url: '',
        tag: null
      };
      clearSelectedFile();

      // Refresh list to show new post on top
      fetchPosts(1, false);
    },
    (err: any) => {
      submitting.value = false;
      const errorMsg = err.response?.data?.message || t('board.errorCreate');
      showMessage("error", errorMsg);
    }
  );
};

// Actions Dropdown helpers
const actionsDropdownRef = ref(null);

const toggleActionsDropdown = (postId: number) => {
  if (activeActionsDropdown.value === postId) {
    activeActionsDropdown.value = null;
  } else {
    activeActionsDropdown.value = postId;
  }
};

const closeActionsDropdown = () => {
  activeActionsDropdown.value = null;
};

onClickOutside(actionsDropdownRef, () => {
  closeActionsDropdown();
});

const canManagePost = (post: any) => {
  if (!userInfo.value) return false;
  return post.author?.id === userInfo.value.id || userInfo.value.role === 'ADMIN';
};

// Edit Post Dialog
const openEditDialog = (post: any) => {
  closeActionsDropdown();
  editPostData.value = {
    id: post.id,
    title: post.title,
    content: post.content,
    tag: post.tag,
    link_url: post.link_url || '',
    current_image_url: post.image_url,
    image: null,
    remove_image: false
  };
  displayEditDialog.value = true;
};

const submitUpdatedPost = () => {
  editSubmitting.value = true;

  const formData = new FormData();
  formData.append('title', editPostData.value.title);
  formData.append('content', editPostData.value.content);
  
  if (editPostData.value.tag) {
    formData.append('tag', editPostData.value.tag);
  } else {
    formData.append('tag', '');
  }
  
  formData.append('link_url', editPostData.value.link_url || '');

  if (editPostData.value.remove_image) {
    formData.append('remove_image', '1');
  }

  if (editPostData.value.image) {
    formData.append('image', editPostData.value.image);
  }

  UPDATE_POST(
    editPostData.value.id,
    formData,
    (res: any) => {
      editSubmitting.value = false;
      displayEditDialog.value = false;
      showMessage("success", t('board.successUpdate'));
      
      // Update item in local list
      const index = posts.value.findIndex(p => p.id === editPostData.value.id);
      if (index !== -1) {
        const updatedPost = res.data?.data || res.data;
        // Keep comment section state
        posts.value[index] = {
          ...posts.value[index],
          ...updatedPost
        };
      }
    },
    (err: any) => {
      editSubmitting.value = false;
      showMessage("error", t('board.failUpdate'));
    }
  );
};

// Delete Post
const confirmDeletePost = (post: any) => {
  closeActionsDropdown();
  confirm.require({
    message: t('board.deletePostConfirm'),
    header: t('board.deletePost'),
    icon: 'pi pi-exclamation-triangle',
    acceptClass: 'p-button-danger',
    accept: () => {
      DELETE_POST(
        post.id,
        () => {
          showMessage("success", t('board.successDelete'));
          posts.value = posts.value.filter(p => p.id !== post.id);
        },
        () => {
          showMessage("error", t('board.failDelete'));
        }
      );
    }
  });
};

// Like toggle operation
const toggleLike = (post: any) => {
  TOGGLE_LIKE_POST(
    post.id,
    (res: any) => {
      const result = res.data?.data || res.data;
      post.is_liked = result.is_liked;
      post.likes_count = result.likes_count;
      post.liked_by = result.liked_by || [];
    },
    () => {
      showMessage("error", t('board.failAction'));
    }
  );
};

// Comment Expand/Close
const toggleCommentsSection = (postId: number) => {
  const index = expandedComments.value.indexOf(postId);
  if (index > -1) {
    expandedComments.value.splice(index, 1);
  } else {
    expandedComments.value.push(postId);
    
    // Fetch detailed post (with comments) from api
    const post = posts.value.find(p => p.id === postId);
    if (post) {
      post.comments_loading = true;
      GET_POST_DETAIL(
        postId,
        (res: any) => {
          post.comments_loading = false;
          const detail = res.data?.data || res.data;
          post.comments = detail.comments || [];
          post.comments_count = detail.comments_count;
        },
        () => {
          post.comments_loading = false;
        }
      );
    }
  }
};

// Comment submission
const submitComment = (post: any) => {
  if (!post.new_comment_text.trim()) return;

  post.comment_submitting = true;
  ADD_COMMENT(
    post.id,
    { content: post.new_comment_text },
    (res: any) => {
      post.comment_submitting = false;
      const newComment = res.data?.data || res.data;
      
      if (!post.comments) {
        post.comments = [];
      }
      post.comments.push(newComment);
      post.comments_count += 1;
      post.new_comment_text = '';
    },
    (err: any) => {
      post.comment_submitting = false;
      showMessage("error", t('board.failComment'));
    }
  );
};

// Comment authorization
const canDeleteComment = (comment: any, post: any) => {
  if (!userInfo.value) return false;
  const currentUserId = userInfo.value.id;
  return (
    comment.author?.id === currentUserId || 
    post.author?.id === currentUserId || 
    userInfo.value.role === 'ADMIN'
  );
};

// Delete comment
const deleteComment = (post: any, commentId: number) => {
  confirm.require({
    message: t('board.deleteCommentConfirm'),
    header: t('board.deleteComment'),
    icon: 'pi pi-exclamation-triangle',
    acceptClass: 'p-button-danger',
    accept: () => {
      DELETE_COMMENT(
        commentId,
        () => {
          post.comments = post.comments.filter((c: any) => c.id !== commentId);
          post.comments_count -= 1;
          showMessage("success", t('board.successDeleteComment'));
        },
        () => {
          showMessage("error", t('board.failDeleteComment'));
        }
      );
    }
  });
};

// Image zoom modal helper
const openImageModal = (imageUrl: string) => {
  modalImageUrl.value = imageUrl;
  displayImageModal.value = true;
};

// Formatting & Labeling Helpers
const getInitials = (name = '') => {
  if (!name) return 'U';
  const parts = name.trim().split(' ');
  if (parts.length > 1) {
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  }
  return name.charAt(0).toUpperCase();
};

const getTagLabel = (tag: string) => {
  switch (tag) {
    case 'IMPORTANT': return t('board.tagImportant');
    case 'ANNOUNCEMENT': return t('board.tagAnnouncement');
    case 'EVENT': return t('board.tagEvent');
    case 'NEWS': return t('board.tagNews');
    default: return tag;
  }
};

const getTagClasses = (tag: string) => {
  switch (tag) {
    case 'IMPORTANT': 
      return 'bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400';
    case 'ANNOUNCEMENT': 
      return 'bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400';
    case 'EVENT': 
      return 'bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400';
    case 'NEWS': 
      return 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400';
    default: 
      return 'bg-surface-100 border-surface-200 text-surface-600';
  }
};

const getTagDotColor = (tag: string) => {
  switch (tag) {
    case 'IMPORTANT': return 'bg-red-500';
    case 'ANNOUNCEMENT': return 'bg-amber-500';
    case 'EVENT': return 'bg-blue-500';
    case 'NEWS': return 'bg-emerald-500';
    default: return 'bg-surface-400';
  }
};

const formatRelativeTime = (dateStr: string) => {
  if (!dateStr) return '';
  const date = new Date(dateStr.replace(' ', 'T'));
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHr = Math.floor(diffMin / 60);
  const diffDays = Math.floor(diffHr / 24);

  if (diffSec < 60) return t('notification.justNow');
  if (diffMin < 60) return t('notification.minutesAgo', { n: diffMin });
  if (diffHr < 24) return t('notification.hoursAgo', { n: diffHr });
  if (diffDays < 7) return t('notification.daysAgo', { n: diffDays });
  
  // Return standard date
  return date.toLocaleDateString();
};

onMounted(() => {
  fetchPosts(1, false);
});
</script>

<style scoped>
/* Remove standard browser scrollbars on filters container */
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
