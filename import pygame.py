import pygame
import sys

# Initialize Pygame
pygame.init()

# Screen settings
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Mini Doraemon Cartoon")

# Colors
WHITE = (255, 255, 255)
BLUE = (0, 120, 255)
BLACK = (0, 0, 0)

# Font
font = pygame.font.SysFont('Comic Sans MS', 28)

# Load Character Image (use a placeholder circle for now)
doraemon_rect = pygame.Rect(100, 400, 80, 120)

# Dialogue
dialogues = [
    "Hi, I'm DoraBot!",
    "I come from the future to help you!",
    "Let's go on an adventure!",
]
dialogue_index = 0

clock = pygame.time.Clock()

def draw_scene():
    screen.fill(WHITE)
    
    # Draw character
    pygame.draw.ellipse(screen, BLUE, doraemon_rect)
    pygame.draw.circle(screen, BLACK, (doraemon_rect.centerx, doraemon_rect.top + 30), 10)  # eye
    
    # Dialogue box
    pygame.draw.rect(screen, (230, 230, 250), (50, 50, 700, 100), border_radius=10)
    text_surface = font.render(dialogues[dialogue_index], True, BLACK)
    screen.blit(text_surface, (70, 80))
    
    pygame.display.update()

# Main loop
running = True
while running:
    draw_scene()
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        
        # Move dialogue forward with space
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_SPACE:
                dialogue_index += 1
                if dialogue_index >= len(dialogues):
                    dialogue_index = 0

    clock.tick(30)

pygame.quit()
sys.exit()
