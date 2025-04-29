APP_NAME = react-ts
SRC_DIR = src
PUBLIC_DIR = public
BUILD_DIR = build
INSTALL_DIR = node_modules
PACKAGE_LOCK_FILE = package-lock.json

.DEFAULT_GOAL := help

help:
	@echo "🚀 Доступные команды:"
	@echo " "
	@echo "start     - Запустить приложение (npm start)"
	@echo "build     - Собрать проект для продакшена"
	@echo "lint      - Проверить код через ESLint"
	@echo "lint-fix  - Исправить ошибки через ESLint"
	@echo "clean     - Очистить папку сборки"
	@echo "reinstall - Переустановка node-пакетов"
	@echo " "

start:
	npm start

build:
	npm run build

lint:
	npm run lint

lint-fix:
	npm run lint:fix

clean:
	rm -rf $(BUILD_DIR)/

reinstall:
	rm -rf $(INSTALL_DIR)/ && rm -f $(PACKAGE_LOCK_FILE) && npm install

.PHONY: help start build lint lint-fix clean
