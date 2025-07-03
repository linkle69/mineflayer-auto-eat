import { Bot } from 'mineflayer'
import { EatUtil } from './new.js'
import utilPlugin from '@nxg-org/mineflayer-util-plugin'

declare module 'mineflayer' {
    interface Bot {
        autoEat: EatUtil
    }
}

export function loader(bot: Bot) {
    const plugin = utilPlugin.default ?? utilPlugin
    
    if (!bot.hasPlugin(plugin)) {
        bot.loadPlugin(plugin)
    }
    
    bot.autoEat = new EatUtil(bot)
}
