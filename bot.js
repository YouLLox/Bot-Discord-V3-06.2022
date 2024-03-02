(async () => {
    let process = require('process');
    process.on('uncaughtException', function(err) {
        console.log(`Error!`);
        console.log(err);
    });
    const ShsHSjJSjSJSJSGHkkhdjdmns = ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'ADD_REACTIONS', 'STREAM', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'CONNECT', 'SPEAK', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'USE_APPLICATION_COMMANDS', 'REQUEST_TO_SPEAK', 'MANAGE_THREADS', 'USE_PUBLIC_THREADS', 'CREATE_PUBLIC_THREADS', 'USE_PRIVATE_THREADS', 'CREATE_PRIVATE_THREADS', 'USE_EXTERNAL_STICKERS', 'SEND_MESSAGES_IN_THREADS', 'START_EMBEDDED_ACTIVITIES'











    ]
    const events = require('events');
    const {
        exec
    } = require("child_process")
    const S4D_APP_RUN_BUTTON = false
    let Discord = require("discord.js")
    let Database = require("easy-json-database")
    let {
        MessageEmbed,
        MessageButton,
        MessageActionRow,
        Intents,
        Permissions,
        MessageSelectMenu
    } = require("discord.js")
    let logs = require("discord-logs")
    let moment = require("moment")
    const os = require("os-utils");
    const ms = require("ms")
    let https = require("https")
    const Captcha = require("@haileybot/captcha-generator");
    let fs = require('fs');
    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const s4d = {
        Discord,
        database: new Database(`./database.json`),
        fire: null,
        joiningMember: null,
        reply: null,
        tokenInvalid: false,
        tokenError: null,
        player: null,
        manager: null,
        Inviter: null,
        message: null,
        notifer: null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };
    s4d.client = new s4d.Discord.Client({
        intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
        partials: ["REACTION", "CHANNEL"]
    });
    s4d.client.on('ready', () => {
        console.log(s4d.client.user.tag + " is alive!")
    })
    logs(s4d.client);
    var recrue_args, recrue, xp_args, sperso_resp, money_remove_args, mute_args, xp, sperso_resp2, clear_number_args, deban_member_args, money_remove_member, money_add_args, mute_member, lb_part_args, level_args, clear_number, deban_member, money_remove_number, money_add_member, money_member_args, mute_time, message_mp_args, lb_part_member, member_quota_args, level, deban_reason, ban_member_args, money_add_number, money_member, mute_reason, message_mp_space, member_quota, ban_member, ban_member_id, ban_reason, ghostping, ghostping2, number_quota;


    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'partenariat_count' || (s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'part_count') {
            if (s4d.database.get(String('partner_config')) == 'on') {
                if ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.get(s4d.database.get(String((String((s4dmessage.guild).id) + '-access_partenariat'))))).id)) {
                    s4dmessage.reply({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('reward_emoji'))) + '__** | Félicitations !**__')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String((['Tu as fait `', s4d.database.get(String((String((s4dmessage.author).id) + '-lb_part'))), '` partenariat(s) !'].join(''))))
                            .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                        ],
                        allowedMentions: {
                            repliedUser: true
                        }
                    });
                } else {
                    s4dmessage.reply({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '**| Un problème est survenu !**')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String((['Vous devez avoir le rôle *<@&', s4d.database.get(String((String((s4dmessage.guild).id) + '-rank_access_partenariats'))), '>* pour poursuivre !', '', ''].join(''))))
                        ],
                        allowedMentions: {
                            repliedUser: true
                        }
                    }).then(async (s4dfrost_real_reply) => {
                        await delay(Number(5) * 1000);
                        s4dfrost_real_reply.delete();
                        s4dmessage.delete();

                    });
                }
            }
        }
        if ((((s4dmessage.content) || '').startsWith((String(s4d.database.get(String('prefix'))) + 'partenariat_count') || '')) || (((s4dmessage.content) || '').startsWith((String(s4d.database.get(String('prefix'))) + 'part_count') || ''))) {
            if (!((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'partenariat_count' || (s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'part_count')) {
                if (s4d.database.get(String('partner_config')) == 'on') {
                    if ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.get(s4d.database.get(String((String((s4dmessage.guild).id) + '-access_partenariat'))))).id)) {
                        lb_part_args = (s4dmessage.content).split(' ');
                        lb_part_member = lb_part_args.splice(1, 1)[0];
                        if ((lb_part_member || '').startsWith('<@' || '')) {
                            s4dmessage.reply({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('reward_emoji'))) + '__** | Félicitations !**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((['Cet équipier possède `', s4d.database.get(String((String((s4dmessage.mentions.members.first().user).id) + '-lb_part'))), '` partenariat(s) !'].join(''))))
                                    .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                ],
                                allowedMentions: {
                                    repliedUser: true
                                }
                            });
                        } else {
                            s4dmessage.reply({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('reward_emoji'))) + '__** | Félicitations !**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((['Cet équipier possède `', s4d.database.get(String((String(lb_part_member) + '-lb_part'))), '` partenariat(s) !'].join(''))))
                                    .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                ],
                                allowedMentions: {
                                    repliedUser: true
                                }
                            });
                        }
                    } else {
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '**| Un problème est survenu !**')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String((['Vous devez avoir le rôle *<@&', s4d.database.get(String((String((s4dmessage.guild).id) + '-rank_access_partenariats'))), '>* pour poursuivre !', '', ''].join(''))))
                            ],
                            allowedMentions: {
                                repliedUser: true
                            }
                        }).then(async (s4dfrost_real_reply) => {
                            await delay(Number(5) * 1000);
                            s4dfrost_real_reply.delete();
                            s4dmessage.delete();

                        });
                    }
                }
            }
        }
        if ((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'partenariat') {
            if (s4d.database.get(String('partner_config')) == 'on') {
                if ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.get('990701954453872680')).id)) {
                    if (s4d.database.get(String((String((s4dmessage.author).id) + '-cooldown_part'))) <= (Math.floor(new Date().getTime() / 1000)) || !s4d.database.has(String((String((s4dmessage.author).id) + '-cooldown_part')))) {
                        (s4dmessage.channel).send({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('partner_emoji'))) + '__**| Système de Partenariat**__')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String(`<:bot_files:986666375131058178> **| Description** = *Configurer la description du partenariat.*

          <:bot_community:986667100343001109> **| Représentant** = *Configurer le démarcheur du partenariat.*

          <:bot_muted:986666385763627078> **| Mention** = *Sélectionner la mention du partenariat.*`))
                            ],
                            components: [(new MessageActionRow()
                                .addComponents(
                                    new MessageSelectMenu()
                                    .setCustomId('partenariat_menu')
                                    .setPlaceholder('Avec le menu, configurez le futur partenariat !')
                                    .setMaxValues(1)
                                    .setMinValues(1)
                                    .setDisabled(false)


                                    .addOptions({
                                        value: 'desc_partenariat',
                                        label: 'Description',
                                        emoji: '<:bot_files:986666375131058178>',
                                        default: false,
                                    }, {
                                        value: 'resp_partenariat',
                                        label: 'Représentant',
                                        emoji: '<:bot_community:986667100343001109>',
                                        default: false,
                                    }, {
                                        value: 'ping_partenariat',
                                        label: 'Mention',
                                        emoji: '<:bot_muted:986666385763627078>',
                                        default: false,
                                    }, {
                                        value: 'good_partenariat',
                                        label: 'Valider',
                                        emoji: '<a:bot_good:986673556777734206>',
                                        default: false,
                                    }, ))
                            )]
                        }).then(m => {
                            let collector = m.createMessageComponentCollector({
                                filter: i => i.user.id === (s4dmessage.member).id,
                                time: 60000
                            });
                            collector.on('collect', async i => {
                                if ((i.customId) == 'partenariat_menu' && (i.values[0]) == 'good_partenariat') {
                                    (s4dmessage.channel).send({
                                        embeds: [new MessageEmbed()
                                            .setTitle(String((String(s4d.database.get(String('save_emoji'))) + '**| Prévisualisation de l\'annonce**')))
                                            .setColor(String(s4d.database.get(String('embed_color'))))
                                            .setDescription(String((['<:bot_files:986666375131058178> **| Salon** = <#', s4d.database.get(String((String((s4dmessage.guild).id) + '-settchanel_partenariats'))), '>', '\n', '\n', '<:bot_edit:986666388494114866> __**| Message:**__', '\n', '> <:bot_community:986667100343001109> **De:** <@', s4d.database.get(String(([(s4dmessage.guild).id, '-', (s4dmessage.author).id, 'resp_partenariat'].join('')))), '>', '\n', '> <:bot_shield:986666382735339550> **Par:** <@', (s4dmessage.author).id, '>', '\n', '>  <:bot_muted:986666385763627078> **Mention:** ', s4d.database.get(String(([(s4dmessage.guild).id, '-', (s4dmessage.author).id, 'ping_partenariat'].join('')))), '\n', '\n', s4d.database.get(String(([(s4dmessage.guild).id, '-', (s4dmessage.author).id, 'desc_partenariat'].join(''))))].join(''))))
                                        ],
                                        components: [(new MessageActionRow()
                                            .addComponents(new MessageButton()
                                                .setCustomId('verygood_partenariat')
                                                .setLabel('Confirmer')
                                                .setEmoji('<a:bot_good:986673556777734206>')
                                                .setStyle(('SUCCESS')),
                                                new MessageButton()
                                                .setCustomId('noverygood_partenariat')
                                                .setLabel('Annuler')
                                                .setEmoji('<a:bot_notgood:986673549773266954>')
                                                .setStyle(('DANGER')),
                                            ))]
                                    }).then(m => {
                                        let collector = m.createMessageComponentCollector({
                                            filter: i => i.user.id === (s4dmessage.member).id,
                                            time: 60000
                                        });
                                        collector.on('collect', async i => {
                                            if ((i.customId) == 'verygood_partenariat') {
                                                s4d.database.set(String((String((s4dmessage.author).id) + '-cooldown_part')), ((Math.floor(new Date().getTime() / 1000)) + 300));
                                                s4d.database.add(String((String((s4dmessage.author).id) + '-lb_part')), parseInt(1));
                                                s4d.client.channels.cache.get(s4d.database.get(String((String((s4dmessage.guild).id) + '-settchanel_partenariats')))).send({
                                                    content: String((['', '', '', '', '', '\n', '> <:bot_community:986667100343001109> **De:** <@', s4d.database.get(String(([(s4dmessage.guild).id, '-', (s4dmessage.author).id, 'resp_partenariat'].join('')))), '>', '\n', '> <:bot_shield:986666382735339550> **Par:** <@', (s4dmessage.author).id, '>', '\n', '>  <:bot_muted:986666385763627078> **Mention:** ', s4d.database.get(String(([(s4dmessage.guild).id, '-', (s4dmessage.author).id, 'ping_partenariat'].join('')))), '\n', '\n', s4d.database.get(String(([(s4dmessage.guild).id, '-', (s4dmessage.author).id, 'desc_partenariat'].join(''))))].join('')))
                                                });
                                                (((s4dmessage.guild).members.cache.get(s4d.database.get(String(([(s4dmessage.guild).id, '-', (s4dmessage.author).id, 'resp_partenariat'].join(''))))) || await (s4dmessage.guild).members.fetch(s4d.database.get(String(([(s4dmessage.guild).id, '-', (s4dmessage.author).id, 'resp_partenariat'].join(''))))))).roles.add(((s4dmessage.guild).roles.cache.get(s4d.database.get(String('rankadd_part')))));
                                                (((s4dmessage.guild).members.cache.get(s4d.database.get(String(([(s4dmessage.guild).id, '-', (s4dmessage.author).id, 'resp_partenariat'].join(''))))) || await (s4dmessage.guild).members.fetch(s4d.database.get(String(([(s4dmessage.guild).id, '-', (s4dmessage.author).id, 'resp_partenariat'].join(''))))))).send({
                                                    embeds: [new MessageEmbed()
                                                        .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Certification**__')))
                                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                                        .setDescription(String(('*Bonjour, je suis là pour vous avertir que le partenariat que vous avez négocié avec `Business Pub` a bien été posté sur le serveur, par conséquent je vous ai ajouté le rôle `💛┊ VIP`, bonne continuation et encore merci d\'avoir fait affaire avec nous !*' + '')))
                                                    ]
                                                });
                                                s4dmessage.reply({
                                                    embeds: [new MessageEmbed()
                                                        .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Partenariat terminé !**__')))
                                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                                        .setDescription(String('Le message du partenariat a bien été envoyé dans le salon'))
                                                    ],
                                                    allowedMentions: {
                                                        repliedUser: true
                                                    }
                                                });
                                                s4d.client.channels.cache.get(s4d.database.get(String('logs_bot'))).send({
                                                    embeds: [new MessageEmbed()
                                                        .setTitle(String((String(s4d.database.get(String('save_emoji'))) + '__** | Nouveau Partenariat**__')))
                                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                                        .setDescription(String((['', '', '', '', '', '\n', '> <:bot_community:986667100343001109> **De:** <@', s4d.database.get(String(([(s4dmessage.guild).id, '-', (s4dmessage.author).id, 'resp_partenariat'].join('')))), '>', '\n', '> <:bot_shield:986666382735339550> **Par:** <@', (s4dmessage.author).id, '>', '\n', '>  <:bot_muted:986666385763627078> **Mention: **', s4d.database.get(String(([(s4dmessage.guild).id, '-', (s4dmessage.author).id, 'ping_partenariat'].join('')))), '\n', '\n', s4d.database.get(String(([(s4dmessage.guild).id, '-', (s4dmessage.author).id, 'desc_partenariat'].join(''))))].join(''))))
                                                    ]
                                                });
                                            }
                                            if ((i.customId) == 'noverygood_partenariat') {
                                                s4dmessage.reply({
                                                    embeds: [new MessageEmbed()
                                                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '**| Partenariat annulé !**')))
                                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                                        .setDescription(String('Le partenariat a bien été annulé !'))
                                                    ],
                                                    allowedMentions: {
                                                        repliedUser: true
                                                    }
                                                }).then(async (s4dfrost_real_reply) => {
                                                    await delay(Number(3) * 1000);
                                                    s4dfrost_real_reply.delete();
                                                    s4dmessage.delete();

                                                });
                                            }
                                            await i.update({
                                                content: String('**Menu Expiré**'),
                                                components: [(new MessageActionRow()
                                                    .addComponents(new MessageButton()
                                                        .setCustomId('verygood_partenariat')
                                                        .setLabel('Confirmer')
                                                        .setEmoji('<:item_good:968261893531791370>')
                                                        .setStyle(('SUCCESS')),
                                                        new MessageButton()
                                                        .setCustomId('noverygood_partenariat')
                                                        .setLabel('Annuler')
                                                        .setEmoji(' <:item_accessdenied:968261893745696778>')
                                                        .setStyle(('DANGER')),
                                                    ))]
                                            }).then(m => {

                                            });
                                            await i.deleteReply()

                                        })

                                    });
                                    await i.update({
                                        content: String('**Menu Expiré**'),
                                        components: [(new MessageActionRow()
                                            .addComponents(
                                                new MessageSelectMenu()
                                                .setCustomId('partenariat_menu')
                                                .setPlaceholder('Avec le menu, configurez le futur partenariat !')
                                                .setMaxValues(1)
                                                .setMinValues(1)
                                                .setDisabled(false)


                                                .addOptions({
                                                    value: 'desc_partenariat',
                                                    label: 'Description',
                                                    emoji: '<:item_message:968287427909279794>',
                                                    default: false,
                                                }, {
                                                    value: 'resp_partenariat',
                                                    label: 'Représentant',
                                                    emoji: '<:item_teamsupport:968263156390588436>',
                                                    default: false,
                                                }, {
                                                    value: 'ping_partenariat',
                                                    label: 'Mention',
                                                    emoji: '<:item_call:968480846950576128>',
                                                    default: false,
                                                }, {
                                                    value: 'good_partenariat',
                                                    label: 'Valider',
                                                    emoji: '<:item_good:968261893531791370>',
                                                    default: false,
                                                }, ))
                                        )]
                                    }).then(m => {

                                    });
                                    await i.deleteReply()
                                }
                                if ((i.customId) == 'partenariat_menu' && (i.values[0]) == 'ping_partenariat') {
                                    (s4dmessage.channel).send({
                                        embeds: [new MessageEmbed()
                                            .setTitle(String((String(s4d.database.get(String('ping_emoji'))) + '**| Mention**')))
                                            .setColor(String(s4d.database.get(String('embed_color'))))
                                            .setDescription(String('Configurez la mention du partenariat à l\'aide des différents boutons !'))
                                        ],
                                        components: [(new MessageActionRow()
                                            .addComponents(new MessageButton()
                                                .setCustomId('notifpart-ping_partenariat')
                                                .setLabel('Notification Partenariat')
                                                .setEmoji('<:bot_community:986667100343001109>')
                                                .setStyle(('SUCCESS')),
                                                new MessageButton()
                                                .setCustomId('zero-ping_partenariat')
                                                .setLabel('Aucune mention')
                                                .setEmoji('<:bot_muted:986666385763627078>')
                                                .setStyle(('SECONDARY')),
                                            ))]
                                    }).then(m => {
                                        let collector = m.createMessageComponentCollector({
                                            filter: i => i.user.id === (s4dmessage.member).id,
                                            time: 60000
                                        });
                                        collector.on('collect', async i => {
                                            if ((i.customId) == 'zero-ping_partenariat') {
                                                s4d.database.set(String(([(s4dmessage.guild).id, '-', (s4dmessage.author).id, 'ping_partenariat'].join(''))), '`Aucune`');
                                                s4dmessage.reply({
                                                    embeds: [new MessageEmbed()
                                                        .setTitle(String((String(s4d.database.get(String('save_emoji'))) + '**| Donnés sauvegardées**')))
                                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                                        .setDescription(String('Les informations envoyées ont bien été sauvegardées !'))
                                                    ],
                                                    allowedMentions: {
                                                        repliedUser: true
                                                    }
                                                }).then(async (s4dfrost_real_reply) => {
                                                    await delay(Number(2) * 1000);
                                                    s4dfrost_real_reply.delete();

                                                });
                                            }
                                            if ((i.customId) == 'notifpart-ping_partenariat') {
                                                if (s4d.database.has(String((String((s4dmessage.guild).id) + '-setpingnotifpart_partenariats')))) {
                                                    s4d.database.set(String(([(s4dmessage.guild).id, '-', (s4dmessage.author).id, 'ping_partenariat'].join(''))), (['<@&', s4d.database.get(String((String((s4dmessage.guild).id) + '-setpingnotifpart_partenariats'))), '>'].join('')));
                                                    s4dmessage.reply({
                                                        embeds: [new MessageEmbed()
                                                            .setTitle(String((String(s4d.database.get(String('save_emoji'))) + '**| Donnés sauvegardées**')))
                                                            .setColor(String(s4d.database.get(String('embed_color'))))
                                                            .setDescription(String('Les informations envoyées ont bien été sauvegardées !'))
                                                        ],
                                                        allowedMentions: {
                                                            repliedUser: true
                                                        }
                                                    }).then(async (s4dfrost_real_reply) => {
                                                        await delay(Number(2) * 1000);
                                                        s4dfrost_real_reply.delete();

                                                    });
                                                }
                                            }
                                            await i.update({
                                                content: String('**Menu Expiré**'),
                                                components: [(new MessageActionRow()
                                                    .addComponents(new MessageButton()
                                                        .setCustomId('notifpart-ping_partenariat')
                                                        .setLabel('Notification Partenariat')
                                                        .setEmoji('<:bot_community:986667100343001109>')
                                                        .setStyle(('SUCCESS')),
                                                        new MessageButton()
                                                        .setCustomId('zero-ping_partenariat')
                                                        .setLabel('Aucune mention')
                                                        .setEmoji('<:bot_muted:986666385763627078>')
                                                        .setStyle(('SECONDARY')),
                                                    ))]
                                            }).then(m => {

                                            });
                                            await i.deleteReply()

                                        })

                                    });
                                }
                                if ((i.customId) == 'partenariat_menu' && (i.values[0]) == 'resp_partenariat') {
                                    (s4dmessage.channel).send(String(([s4d.database.get(String('error_emoji')), '**| Quelle est le représentant du partenariat ?**', '\n', '*Entrez `cancel` pour annuler !*'].join('')))).then(() => {
                                        (s4dmessage.channel).awaitMessages({
                                            filter: (m) => m.author.id === (s4dmessage.member).id,
                                            time: (10 * 60 * 1000),
                                            max: 1
                                        }).then(async (collected) => {
                                            s4d.reply = collected.first().content;
                                            s4d.message = collected.first();
                                            if (!((s4d.reply) == 'cancel')) {
                                                if (((s4d.reply) || '').startsWith('<@' || '')) {
                                                    s4d.database.set(String(([(s4dmessage.guild).id, '-', (s4dmessage.author).id, 'resp_partenariat_args'].join(''))), (s4d.reply));
                                                    s4d.database.set(String(([(s4dmessage.guild).id, '-', (s4dmessage.author).id, 'resp_partenariat'].join(''))), (s4d.database.get(String(([(s4dmessage.guild).id, '-', (s4dmessage.author).id, 'resp_partenariat_args'].join('')))).slice(2, 20)));
                                                    s4dmessage.reply({
                                                        embeds: [new MessageEmbed()
                                                            .setTitle(String((String(s4d.database.get(String('save_emoji'))) + '**| Donnés sauvegardées**')))
                                                            .setColor(String(s4d.database.get(String('embed_color'))))
                                                            .setDescription(String('Les informations envoyées ont bien été sauvegardées !'))
                                                        ],
                                                        allowedMentions: {
                                                            repliedUser: true
                                                        }
                                                    });
                                                    await delay(Number(2) * 1000);
                                                    (s4dmessage.channel).bulkDelete((2 | 1));
                                                } else {
                                                    s4d.database.set(String(([(s4dmessage.guild).id, '-', (s4dmessage.author).id, 'resp_partenariat'].join(''))), (s4d.reply));
                                                    s4dmessage.reply({
                                                        embeds: [new MessageEmbed()
                                                            .setTitle(String((String(s4d.database.get(String('save_emoji'))) + '**| Donnés sauvegardées**')))
                                                            .setColor(String(s4d.database.get(String('embed_color'))))
                                                            .setDescription(String('Les informations envoyées ont bien été sauvegardées !'))
                                                        ],
                                                        allowedMentions: {
                                                            repliedUser: true
                                                        }
                                                    });
                                                    await delay(Number(2) * 1000);
                                                    (s4dmessage.channel).bulkDelete((2 | 1));
                                                }
                                            } else {
                                                s4dmessage.reply({
                                                    embeds: [new MessageEmbed()
                                                        .setTitle(String((String(s4d.database.get(String('delete_emoji'))) + '**| Modifications non sauvegardées**')))
                                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                                        .setDescription(String('Les informations que vous m\'avez renseignez n\'ont pas été sauvegardées !'))
                                                    ],
                                                    allowedMentions: {
                                                        repliedUser: true
                                                    }
                                                }).then(async (s4dfrost_real_reply) => {
                                                    await delay(Number(5) * 1000);
                                                    s4dmessage.delete();

                                                });
                                            }

                                            s4d.reply = null;
                                        }).catch(async (e) => {
                                            console.error(e);
                                            s4dmessage.reply({
                                                embeds: [new MessageEmbed()
                                                    .setTitle(String((String(s4d.database.get(String('outtime_emoji'))) + '**| Le temps est écoulé**')))
                                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                                    .setDescription(String('Vous avez mis trop de temps pour répondre !'))
                                                ],
                                                allowedMentions: {
                                                    repliedUser: true
                                                }
                                            }).then(async (s4dfrost_real_reply) => {
                                                await delay(Number(5) * 1000);
                                                s4dmessage.delete();

                                            });
                                        });
                                    })
                                }
                                if ((i.customId) == 'partenariat_menu' && (i.values[0]) == 'desc_partenariat') {
                                    (s4dmessage.channel).send(String(([s4d.database.get(String('error_emoji')), '**| Quelle est la description du partenariat ?**', '\n', '*Entrez `cancel` pour annuler !*'].join('')))).then(() => {
                                        (s4dmessage.channel).awaitMessages({
                                            filter: (m) => m.author.id === (s4dmessage.member).id,
                                            time: (10 * 60 * 1000),
                                            max: 1
                                        }).then(async (collected) => {
                                            s4d.reply = collected.first().content;
                                            s4d.message = collected.first();
                                            if (!((s4d.reply) == 'cancel')) {
                                                s4d.database.set(String(([(s4dmessage.guild).id, '-', (s4dmessage.author).id, 'desc_partenariat'].join(''))), (s4d.reply));
                                                s4dmessage.reply({
                                                    embeds: [new MessageEmbed()
                                                        .setTitle(String((String(s4d.database.get(String('save_emoji'))) + '**| Donnés sauvegardées**')))
                                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                                        .setDescription(String('Les informations envoyées ont bien été sauvegardées !'))
                                                    ],
                                                    allowedMentions: {
                                                        repliedUser: true
                                                    }
                                                });
                                                await delay(Number(2) * 1000);
                                                (s4dmessage.channel).bulkDelete((2 | 1));
                                            } else {
                                                s4dmessage.reply({
                                                    embeds: [new MessageEmbed()
                                                        .setTitle(String((String(s4d.database.get(String('delete_emoji'))) + '**| Modifications non sauvegardées**')))
                                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                                        .setDescription(String('Les informations que vous m\'avez renseignez n\'ont pas été sauvegardées !'))
                                                    ],
                                                    allowedMentions: {
                                                        repliedUser: true
                                                    }
                                                }).then(async (s4dfrost_real_reply) => {
                                                    await delay(Number(5) * 1000);
                                                    s4dmessage.delete();

                                                });
                                            }

                                            s4d.reply = null;
                                        }).catch(async (e) => {
                                            console.error(e);
                                            s4dmessage.reply({
                                                embeds: [new MessageEmbed()
                                                    .setTitle(String((String(s4d.database.get(String('outtime_emoji'))) + '**| Le temps est écoulé**')))
                                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                                    .setDescription(String('Vous avez mis trop de temps pour répondre !'))
                                                ],
                                                allowedMentions: {
                                                    repliedUser: true
                                                }
                                            }).then(async (s4dfrost_real_reply) => {
                                                await delay(Number(5) * 1000);
                                                s4dmessage.delete();

                                            });
                                        });
                                    })
                                }

                            })

                        });
                    } else {
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '**| Un problème est survenu !**')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String((['*Vous devez patienter `', s4d.database.get(String((String((s4dmessage.author).id) + '-cooldown_part'))) - (Math.floor(new Date().getTime() / 1000)), ' secondes', '', '', '', '', '` avant de pourvoir réutiliser cette commande !*'].join(''))))
                            ],
                            allowedMentions: {
                                repliedUser: true
                            }
                        }).then(async (s4dfrost_real_reply) => {
                            await delay(Number(5) * 1000);
                            s4dfrost_real_reply.delete();
                            s4dmessage.delete();

                        });
                    }
                } else {
                    s4dmessage.reply({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '**| Un problème est survenu !**')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String((['Vous devez avoir le rôle *<@&', s4d.database.get(String((String((s4dmessage.guild).id) + '-rank_access_partenariats'))), '>* pour poursuivre !', '', ''].join(''))))
                        ],
                        allowedMentions: {
                            repliedUser: true
                        }
                    }).then(async (s4dfrost_real_reply) => {
                        await delay(Number(5) * 1000);
                        s4dfrost_real_reply.delete();
                        s4dmessage.delete();

                    });
                }
            }
        }

    });

    s4d.client.on('guildMemberAdd', async (param1) => {
        s4d.joiningMember = param1;
        (s4d.joiningMember).send({
            content: String((String(s4d.database.get(String('message_mp'))) + ''))
        });
        s4d.joiningMember = null
    });

    // Commandes d'aide
    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'help') {
            (s4dmessage.channel).send({
                embeds: [new MessageEmbed()
                    .setTitle(String((String(s4d.database.get(String('bot_emoji'))) + '** | Business Bot V3 - Menu d\'aide**')))
                    .setColor(String(s4d.database.get(String('embed_color'))))
                    .setDescription(String((['**<a:bot_house:986675888911446066> | Menu Principal**', '\n', '\n', '- Bot `officiel` de **', (s4dmessage.guild).name, '**, je possède de nombreuses commandes que vous pouvez consulter en interagissant avec le menu.', '\n', '\n', '- Mon développeur est **', (((s4dmessage.guild).members.cache.get('397406757422628869') || await (s4dmessage.guild).members.fetch('397406757422628869')).user).tag, ' ( <@397406757422628869> )**, si tu veux avoir une version similaire de moi-même, contact le par MP.', '\n', '\n', '<a:bot_loupe:986674310913617920> **| Légende:**', '\n', '\n', '- *<a:bot_good:986673556777734206> | commande `Disponible`*', '\n', '- *<a:bot_notgood:986673549773266954> | commande `Indisponible`*', '', '', ''].join(''))))
                ],
                components: [(new MessageActionRow()
                    .addComponents(
                        new MessageSelectMenu()
                        .setCustomId('help-menu')
                        .setPlaceholder('Interagir pour consulter les comandes')
                        .setMaxValues(1)
                        .setMinValues(1)
                        .setDisabled(false)


                        .addOptions({
                            value: 'menu_house',
                            label: 'Menu Principal',
                            emoji: '<a:bot_house:986675888911446066>',
                            description: 'Retourner au menu principal',
                            default: false,
                        }, {
                            value: 'menu_utils',
                            label: 'Utilitaire',
                            emoji: '<:bot_tools:986669486461575270>',
                            description: 'Commandes utilitaires',
                            default: false,
                        }, {
                            value: 'menu_music',
                            label: 'Juke-Box',
                            emoji: '<:bot_radio:986669484695756830>',
                            description: 'Commandes de musique',
                            default: false,
                        }, {
                            value: 'menu_moderator',
                            label: 'Modération',
                            emoji: '<:bot_moderator:986669488466456636>',
                            description: 'Commandes de modération',
                            default: false,
                        }, {
                            value: 'menu_admin',
                            label: 'Propriétaires',
                            emoji: '<:bot_owner:986666412795920435>',
                            description: 'Commandes accessible seulement par les propriétaires',
                            default: false,
                        }, ))
                )]
            }).then(m => {
                let collector = m.createMessageComponentCollector({
                    filter: i => i.user.id === (s4dmessage.member).id,
                    time: 60000
                });
                collector.on('collect', async i => {
                    if ((i.customId) == 'help-menu' && (i.values[0]) == 'menu_admin') {
                        await i.update({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('bot_emoji'))) + '** | Business Bot V3 - Menu d\'aide**')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String((['> <a:bot_good:986673556777734206> `!demote` = *Retirer tous les rôles d\'un haut gradé.*', '\n', '> <a:bot_good:986673556777734206> `!ghostping` = *Configurer le système de ghostping.*', '\n', '> <a:bot_good:986673556777734206> `!break_cooldown` = *Casser un cooldown.*', '\n', '> <a:bot_good:986673556777734206> `!join_copy` = *Afficher le message envoyé en MP lorsqu\'un utilisateur rejoint en version copiable.*', '\n', '> <a:bot_good:986673556777734206> `!message_mp` = *Configurer le message à envoyer aux nouveaux.*', '\n', '> <a:bot_good:986673556777734206> `!partenariat_add` = *Ajouter les accès à la commande de partenariat à un nouveau équipier.*', '\n', '> <a:bot_good:986673556777734206> `!partenariat_remove` = *Retirer les accès à la commande de partenariat à un équipier.*', '\n', '> <a:bot_good:986673556777734206> `!shutdown` = *Eteindre le bot.*', '\n', '> <a:bot_good:986673556777734206> `!money_add` = *Ajouter des coins à un équipier.*', '\n', '> <a:bot_good:986673556777734206> `!money_remove` = *Enlever des coins à un équipier.*', '\n', '> <a:bot_good:986673556777734206> `!say` = *Faire parler le bot.*', '\n', '> <a:bot_good:986673556777734206> `!embed` = *Envoyer un embed de qualité !*', '\n', '> <a:bot_good:986673556777734206> `!bloquer` = *Bloquer l\'écriture dans un salon/ticket au staff.*', '\n', '> <a:bot_good:986673556777734206> `!debloquer` = *Débloquer l\'écriture dans un salon/ticket au staff.*', '\n', '> <a:bot_good:986673556777734206> `!rules` = *Cacher le règlement lors d\'un entretien.*', '\n', '> <a:bot_good:986673556777734206> `!config_quota` = *Configurer les quotas de vérifications publicitaires de la semaine.*', '', ''].join(''))))
                            ],
                            components: [(new MessageActionRow()
                                .addComponents(
                                    new MessageSelectMenu()
                                    .setCustomId('help-menu')
                                    .setPlaceholder('Interagir pour consulter les comandes')
                                    .setMaxValues(1)
                                    .setMinValues(1)
                                    .setDisabled(false)


                                    .addOptions({
                                        value: 'menu_house',
                                        label: 'Menu Principal',
                                        emoji: '<a:bot_house:986675888911446066>',
                                        description: 'Retourner au menu principal',
                                        default: false,
                                    }, {
                                        value: 'menu_utils',
                                        label: 'Utilitaire',
                                        emoji: '<:bot_tools:986669486461575270>',
                                        description: 'Commandes utilitaires',
                                        default: false,
                                    }, {
                                        value: 'menu_music',
                                        label: 'Juke-Box',
                                        emoji: '<:bot_radio:986669484695756830>',
                                        description: 'Commandes de musique',
                                        default: false,
                                    }, {
                                        value: 'menu_moderator',
                                        label: 'Modération',
                                        emoji: '<:bot_moderator:986669488466456636>',
                                        description: 'Commandes de modération',
                                        default: false,
                                    }, {
                                        value: 'menu_admin',
                                        label: 'Propriétaires',
                                        emoji: '<:bot_owner:986666412795920435>',
                                        description: 'Commandes accessible seulement par les propriétaires',
                                        default: false,
                                    }, ))
                            )]
                        }).then(m => {

                        });
                    }
                    if ((i.customId) == 'help-menu' && (i.values[0]) == 'menu_utils') {
                        await i.update({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('bot_emoji'))) + '** | Business Bot V3 - Menu d\'aide**')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String((['> <a:bot_good:986673556777734206> `!member_count` = *Afficher le nombre de membres présents sur le serveur.*', '\n', '> <a:bot_good:986673556777734206> `!bot_count` = *Afficher le nombre de bots présents sur le serveur.*', '\n', '> <a:bot_good:986673556777734206> `!chanel_count` = *Afficher le nombre de salons sur le serveur.*', '\n', '> <a:bot_good:986673556777734206> `!pub_count` = *Afficher le nombre de publicités accueillies par Business Pub depuis la V1 du bot.*', '\n', '> <a:bot_good:986673556777734206> `!level` = *Afficher le niveau atteint par un utilisateur.*', '\n', '> <a:bot_good:986673556777734206> `!xp` = *Afficher le nombre d\'XP atteints par un utilisateur.*', '\n', '> <a:bot_good:986673556777734206> `!ping` = *Afficher le ping du bot.*', '\n', '> <a:bot_good:986673556777734206> `!join` = *Envoyer en MP le message envoyé aux nouveaux membres.*', '', '', '', '', '', '', ''].join(''))))
                            ],
                            components: [(new MessageActionRow()
                                .addComponents(
                                    new MessageSelectMenu()
                                    .setCustomId('help-menu')
                                    .setPlaceholder('Interagir pour consulter les comandes')
                                    .setMaxValues(1)
                                    .setMinValues(1)
                                    .setDisabled(false)


                                    .addOptions({
                                        value: 'menu_house',
                                        label: 'Menu Principal',
                                        emoji: '<a:bot_house:986675888911446066>',
                                        description: 'Retourner au menu principal',
                                        default: false,
                                    }, {
                                        value: 'menu_utils',
                                        label: 'Utilitaire',
                                        emoji: '<:bot_tools:986669486461575270>',
                                        description: 'Commandes utilitaires',
                                        default: false,
                                    }, {
                                        value: 'menu_music',
                                        label: 'Juke-Box',
                                        emoji: '<:bot_radio:986669484695756830>',
                                        description: 'Commandes de musique',
                                        default: false,
                                    }, {
                                        value: 'menu_moderator',
                                        label: 'Modération',
                                        emoji: '<:bot_moderator:986669488466456636>',
                                        description: 'Commandes de modération',
                                        default: false,
                                    }, {
                                        value: 'menu_admin',
                                        label: 'Propriétaires',
                                        emoji: '<:bot_owner:986666412795920435>',
                                        description: 'Commandes accessible seulement par les propriétaires',
                                        default: false,
                                    }, ))
                            )]
                        }).then(m => {

                        });
                    }
                    if ((i.customId) == 'help-menu' && (i.values[0]) == 'menu_music') {
                        await i.update({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('bot_emoji'))) + '** | Business Bot V3 - Menu d\'aide**')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String((['> <a:bot_good:986673556777734206> `!play` = *Allumer la musique.*', '\n', '> <a:bot_good:986673556777734206> `!stop` = *Stopper la musique en cours.*', '\n', '> <a:bot_good:986673556777734206> `!pause` = *Mettre la musique en cours sur pause.*', '\n', '> <a:bot_good:986673556777734206> `!resume` = *Reprendre une musique mise sur pause.*', '\n', '> <a:bot_good:986673556777734206> `!volume` = *Gérer le volume.*', '\n', '> <a:bot_good:986673556777734206> `!skip` = *Passer à la musique suivante.*', '\n', '> <a:bot_good:986673556777734206> `!back` = *Réécouter la musique précédente.*', '', '', '', '', '', '', '', '', ''].join(''))))
                            ],
                            components: [(new MessageActionRow()
                                .addComponents(
                                    new MessageSelectMenu()
                                    .setCustomId('help-menu')
                                    .setPlaceholder('Interagir pour consulter les comandes')
                                    .setMaxValues(1)
                                    .setMinValues(1)
                                    .setDisabled(false)


                                    .addOptions({
                                        value: 'menu_house',
                                        label: 'Menu Principal',
                                        emoji: '<a:bot_house:986675888911446066>',
                                        description: 'Retourner au menu principal',
                                        default: false,
                                    }, {
                                        value: 'menu_utils',
                                        label: 'Utilitaire',
                                        emoji: '<:bot_tools:986669486461575270>',
                                        description: 'Commandes utilitaires',
                                        default: false,
                                    }, {
                                        value: 'menu_music',
                                        label: 'Juke-Box',
                                        emoji: '<:bot_radio:986669484695756830>',
                                        description: 'Commandes de musique',
                                        default: false,
                                    }, {
                                        value: 'menu_moderator',
                                        label: 'Modération',
                                        emoji: '<:bot_moderator:986669488466456636>',
                                        description: 'Commandes de modération',
                                        default: false,
                                    }, {
                                        value: 'menu_admin',
                                        label: 'Propriétaires',
                                        emoji: '<:bot_owner:986666412795920435>',
                                        description: 'Commandes accessible seulement par les propriétaires',
                                        default: false,
                                    }, ))
                            )]
                        }).then(m => {

                        });
                    }
                    if ((i.customId) == 'help-menu' && (i.values[0]) == 'menu_house') {
                        await i.update({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('bot_emoji'))) + '** | Business Bot V3 - Menu d\'aide**')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String((['**<a:bot_house:986675888911446066> | Menu Principal**', '\n', '\n', '- Bot `officiel` de **', (s4dmessage.guild).name, '**, je possède de nombreuses commandes que vous pouvez consulter en interagissant avec le menu.', '\n', '\n', '- Mon développeur est **', (((s4dmessage.guild).members.cache.get('397406757422628869') || await (s4dmessage.guild).members.fetch('397406757422628869')).user).tag, ' ( <@397406757422628869> )**, si tu veux avoir une version similaire de moi-même, contact le par MP.', '\n', '\n', '<a:bot_loupe:986674310913617920> **| Légende:**', '\n', '\n', '- *<a:bot_good:986673556777734206> | commande `Disponible`*', '\n', '- *<a:bot_notgood:986673549773266954> | commande `Indisponible`*', '', '', ''].join(''))))
                            ],
                            components: [(new MessageActionRow()
                                .addComponents(
                                    new MessageSelectMenu()
                                    .setCustomId('help-menu')
                                    .setPlaceholder('Interagir pour consulter les comandes')
                                    .setMaxValues(1)
                                    .setMinValues(1)
                                    .setDisabled(false)


                                    .addOptions({
                                        value: 'menu_house',
                                        label: 'Menu Principal',
                                        emoji: '<a:bot_house:986675888911446066>',
                                        description: 'Retourner au menu principal',
                                        default: false,
                                    }, {
                                        value: 'menu_utils',
                                        label: 'Utilitaire',
                                        emoji: '<:bot_tools:986669486461575270>',
                                        description: 'Commandes utilitaires',
                                        default: false,
                                    }, {
                                        value: 'menu_music',
                                        label: 'Juke-Box',
                                        emoji: '<:bot_radio:986669484695756830>',
                                        description: 'Commandes de musique',
                                        default: false,
                                    }, {
                                        value: 'menu_moderator',
                                        label: 'Modération',
                                        emoji: '<:bot_moderator:986669488466456636>',
                                        description: 'Commandes de modération',
                                        default: false,
                                    }, {
                                        value: 'menu_admin',
                                        label: 'Propriétaires',
                                        emoji: '<:bot_owner:986666412795920435>',
                                        description: 'Commandes accessible seulement par les propriétaires',
                                        default: false,
                                    }, ))
                            )]
                        }).then(m => {

                        });
                    }
                    if ((i.customId) == 'help-menu' && (i.values[0]) == 'menu_moderator') {
                        await i.update({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('bot_emoji'))) + '** | Business Bot V3 - Menu d\'aide**')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String((['> <a:bot_good:986673556777734206> `!ban` = *Bannir un utilisateur du serveur.*', '\n', '> <a:bot_good:986673556777734206> `!unban` = *Debannir un utilisateur du serveur.*', '\n', '> <a:bot_good:986673556777734206> `!kick` = *Expulser un utilisateur du serveur.*', '', '', '\n', '> <a:bot_good:986673556777734206> `!clear` = *Effacer un certain nombre de message.*', '\n', '> <a:bot_good:986673556777734206> `!partenariat` = *Configurer un partenariat.*', '\n', '> <a:bot_good:986673556777734206> `!partenariat_count/!part_count` = *Afficher le nombre de partenariats faits.*', '\n', '> <a:bot_good:986673556777734206> `!pub` = *Afficher la publicité du serveur.*', '\n', '> <a:bot_good:986673556777734206> `!part_infos` = *Afficher les conditions partenariats.*', '\n', '> <a:bot_good:986673556777734206> `!rc` = *Afficher les conditions et les informations à propos des recrutements staff.*', '\n', '> <a:bot_good:986673556777734206> `!recrue` = *Donner les rôles nécessaires aux nouveaux équipiers.*', '\n', '> <a:bot_good:986673556777734206> `!demote_staff` = *Retirer tous les rôles d\'un staff.*', '\n', '> <a:bot_good:986673556777734206> `!money` = *Afficher le nombre de coins détenu(s) par un équipier.*', '\n', '> <a:bot_good:986673556777734206> `!lock` = *Fermer un salon textuel.*', '\n', '> <a:bot_good:986673556777734206> `!unlock` = *Ouvrir un salon textuel déjà fermé.*', '\n', '> <a:bot_good:986673556777734206> `!quota` = *Afficher le quota de vérifications publicitaires à remplir.*'].join(''))))
                            ],
                            components: [(new MessageActionRow()
                                .addComponents(
                                    new MessageSelectMenu()
                                    .setCustomId('help-menu')
                                    .setPlaceholder('Interagir pour consulter les comandes')
                                    .setMaxValues(1)
                                    .setMinValues(1)
                                    .setDisabled(false)


                                    .addOptions({
                                        value: 'menu_house',
                                        label: 'Menu Principal',
                                        emoji: '<a:bot_house:986675888911446066>',
                                        description: 'Retourner au menu principal',
                                        default: false,
                                    }, {
                                        value: 'menu_utils',
                                        label: 'Utilitaire',
                                        emoji: '<:bot_tools:986669486461575270>',
                                        description: 'Commandes utilitaires',
                                        default: false,
                                    }, {
                                        value: 'menu_music',
                                        label: 'Juke-Box',
                                        emoji: '<:bot_radio:986669484695756830>',
                                        description: 'Commandes de musique',
                                        default: false,
                                    }, {
                                        value: 'menu_moderator',
                                        label: 'Modération',
                                        emoji: '<:bot_moderator:986669488466456636>',
                                        description: 'Commandes de modération',
                                        default: false,
                                    }, {
                                        value: 'menu_admin',
                                        label: 'Propriétaires',
                                        emoji: '<:bot_owner:986666412795920435>',
                                        description: 'Commandes accessible seulement par les propriétaires',
                                        default: false,
                                    }, ))
                            )]
                        }).then(m => {

                        });
                    }

                })

            });
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'config_quota') {
            if ((s4dmessage.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR) || ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.get('854718305012547605')).id))) {
                (s4dmessage.channel).send({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('settings_emoji'))) + '__** | Configuration des quotas**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String('Avec les différents boutons, configurez les quotas !'))
                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                    ],
                    components: [(new MessageActionRow()
                        .addComponents(new MessageButton()
                            .setCustomId('add_quota')
                            .setLabel('Ajouter un équipier')
                            .setEmoji('➕')
                            .setStyle(('SECONDARY')),
                        ))]
                }).then(m => {
                    let collector = m.createMessageComponentCollector({
                        filter: i => i.user.id === (s4dmessage.member).id,
                        time: 60000
                    });
                    collector.on('collect', async i => {
                        if ((i.customId) == 'add_quota') {
                            (s4dmessage.channel).send(String('<:bot_community:986667100343001109> | Quel est l\'utilisateur en question ?')).then(() => {
                                (s4dmessage.channel).awaitMessages({
                                    filter: (m) => m.author.id === (s4dmessage.member).id,
                                    time: (5 * 60 * 1000),
                                    max: 1
                                }).then(async (collected) => {
                                    s4d.reply = collected.first().content;
                                    s4d.message = collected.first();
                                    if (((s4d.reply) || '').startsWith('<@' || '')) {
                                        member_quota_args = (s4d.reply);
                                        member_quota = member_quota_args.slice(2, 20);
                                        s4d.database.set(String((String((s4dmessage.author).id) + '-user_quota_args')), member_quota);
                                        s4dmessage.reply({
                                            embeds: [new MessageEmbed()
                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + '__** | Informations sauvegardées !**__')))
                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                .setDescription(String('Toutes les informations ont bien été sauvegardées '))
                                            ],
                                            allowedMentions: {
                                                repliedUser: true
                                            }
                                        });
                                        await delay(Number(2) * 1000);
                                        (s4dmessage.channel).bulkDelete((2 | 1));
                                        (s4dmessage.channel).send(String('<:bot_community:986667100343001109> | Quel est le nombre de vérifications actuel de cet utilisateur ?')).then(() => {
                                            (s4dmessage.channel).awaitMessages({
                                                filter: (m) => m.author.id === (s4dmessage.member).id,
                                                time: (5 * 60 * 1000),
                                                max: 1
                                            }).then(async (collected) => {
                                                s4d.reply = collected.first().content;
                                                s4d.message = collected.first();
                                                number_quota = (s4d.reply);
                                                number_quota = number_quota * 1;
                                                number_quota = number_quota + 50;
                                                s4d.database.set(String((String(s4d.database.get(String((String((s4dmessage.author).id) + '-user_quota_args')))) + '-quota')), number_quota);
                                                s4dmessage.reply({
                                                    embeds: [new MessageEmbed()
                                                        .setTitle(String((String(s4d.database.get(String('save_emoji'))) + '__** | Informations sauvegardées !**__')))
                                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                                        .setDescription(String('Configuration de cet utilisateur terminée !'))
                                                    ],
                                                    allowedMentions: {
                                                        repliedUser: true
                                                    }
                                                });
                                                await delay(Number(2) * 1000);
                                                (s4dmessage.channel).bulkDelete((2 | 1));

                                                s4d.reply = null;
                                            }).catch(async (e) => {
                                                console.error(e);
                                                s4dmessage.reply({
                                                    embeds: [new MessageEmbed()
                                                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                                        .setDescription(String('Vous avez mis trop de temps pour répondre !'))
                                                    ],
                                                    allowedMentions: {
                                                        repliedUser: true
                                                    }
                                                });
                                                await delay(Number(2) * 1000);
                                                (s4dmessage.channel).bulkDelete((2 | 1));
                                            });
                                        })
                                    } else {
                                        s4d.database.set(String((String((s4dmessage.author).id) + '-user_quota_args')), (s4d.reply));
                                        s4dmessage.reply({
                                            embeds: [new MessageEmbed()
                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + '__** | Informations sauvegardées !**__')))
                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                .setDescription(String('Toutes les informations ont bien été sauvegardées '))
                                            ],
                                            allowedMentions: {
                                                repliedUser: true
                                            }
                                        });
                                        await delay(Number(2) * 1000);
                                        (s4dmessage.channel).bulkDelete((2 | 1));
                                        (s4dmessage.channel).send(String('<:bot_community:986667100343001109> | Quel est le nombre de vérifications actuel de cet utilisateur ?')).then(() => {
                                            (s4dmessage.channel).awaitMessages({
                                                filter: (m) => m.author.id === (s4dmessage.member).id,
                                                time: (5 * 60 * 1000),
                                                max: 1
                                            }).then(async (collected) => {
                                                s4d.reply = collected.first().content;
                                                s4d.message = collected.first();
                                                number_quota = (s4d.reply);
                                                number_quota = number_quota * 1;
                                                number_quota = number_quota + 50;
                                                s4d.database.set(String((String(s4d.database.get(String((String((s4dmessage.author).id) + '-user_quota_args')))) + '-quota')), number_quota);
                                                s4dmessage.reply({
                                                    embeds: [new MessageEmbed()
                                                        .setTitle(String((String(s4d.database.get(String('save_emoji'))) + '__** | Informations sauvegardées !**__')))
                                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                                        .setDescription(String('Configuration de cet utilisateur terminée !'))
                                                    ],
                                                    allowedMentions: {
                                                        repliedUser: true
                                                    }
                                                });
                                                await delay(Number(2) * 1000);
                                                (s4dmessage.channel).bulkDelete((2 | 1));

                                                s4d.reply = null;
                                            }).catch(async (e) => {
                                                console.error(e);
                                                s4dmessage.reply({
                                                    embeds: [new MessageEmbed()
                                                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                                        .setDescription(String('Vous avez mis trop de temps pour répondre !'))
                                                    ],
                                                    allowedMentions: {
                                                        repliedUser: true
                                                    }
                                                });
                                                await delay(Number(2) * 1000);
                                                (s4dmessage.channel).bulkDelete((2 | 1));
                                            });
                                        })
                                    }

                                    s4d.reply = null;
                                }).catch(async (e) => {
                                    console.error(e);
                                    s4dmessage.reply({
                                        embeds: [new MessageEmbed()
                                            .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                                            .setColor(String(s4d.database.get(String('embed_color'))))
                                            .setDescription(String('Vous avez mis trop de temps pour répondre !'))
                                        ],
                                        allowedMentions: {
                                            repliedUser: true
                                        }
                                    });
                                    await delay(Number(2) * 1000);
                                    (s4dmessage.channel).bulkDelete((2 | 1));
                                });
                            })
                        }

                    })

                });
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String('Vous n\'avez pas la permission d\'entrer cette commande !'))
                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();
                    s4dmessage.delete();

                });
            }
        }
        if ((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'quota') {
            if ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.find((role) => role.name === '🛎️┊Staff')).id)) {
                if (((s4dmessage.channel).id) == '801509666890186803' || ((s4dmessage.channel).id) == '800364480461537280') {
                    if (s4d.database.get(String('quota_cooldown')) <= (Math.floor(new Date().getTime() / 1000))) {
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('ticket_emoji'))) + '__** | Quota**__')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String((['Votre objectif est de *`', s4d.database.get(String((String((s4dmessage.author).id) + '-quota'))), ' vérifications publicitaires`* cette semaine.'].join(''))))
                                .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                            ],
                            allowedMentions: {
                                repliedUser: true
                            }
                        });
                        s4d.database.set(String('quota_cooldown'), ((Math.floor(new Date().getTime() / 1000)) + 10));
                    }
                } else {
                    s4dmessage.reply({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String(`Vous devez poster la commande dans un salon privé !

        Ex: *<#801509666890186803> et <#800364480461537280>*`))
                            .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                        ],
                        allowedMentions: {
                            repliedUser: true
                        }
                    }).then(async (s4dfrost_real_reply) => {
                        await delay(Number(5) * 1000);
                        s4dfrost_real_reply.delete();
                        s4dmessage.delete();

                    });
                }
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String('Vous n\'avez pas la permission d\'entrer cette commande !'))
                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();
                    s4dmessage.delete();

                });
            }
        }
        if (((s4dmessage.content) || '').startsWith((String(s4d.database.get(String('prefix'))) + 'quota') || '')) {
            if (!((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'quota')) {
                if ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.find((role) => role.name === '🛎️┊Staff')).id)) {
                    if (((s4dmessage.channel).id) == '801509666890186803' || ((s4dmessage.channel).id) == '800364480461537280') {
                        if (s4d.database.get(String('quota_cooldown')) <= (Math.floor(new Date().getTime() / 1000))) {
                            member_quota_args = (s4dmessage.content).split(' ');
                            member_quota = member_quota_args.splice(1, 1)[0];
                            if ((member_quota || '').startsWith('<@' || '')) {
                                s4dmessage.reply({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('ticket_emoji'))) + '__** | Quota**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String((['Cet utilisateur a un objectif de *`', s4d.database.get(String((String((s4dmessage.mentions.members.first().user).id) + '-quota'))), ' vérifications publicitaires`* cette semaine.'].join(''))))
                                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                    ],
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                });
                            } else {
                                s4dmessage.reply({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('ticket_emoji'))) + '__** | Quota**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String((['Cet utilisateur a un objectif de *`', s4d.database.get(String((String(member_quota) + '-quota'))), ' vérifications publicitaires`* cette semaine.'].join(''))))
                                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                    ],
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                });
                            }
                            s4d.database.set(String('quota_cooldown'), ((Math.floor(new Date().getTime() / 1000)) + 10));
                        }
                    } else {
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String(`Vous devez poster la commande dans un salon privé !

          Ex: *<#801509666890186803> et <#800364480461537280>*`))
                                .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                            ],
                            allowedMentions: {
                                repliedUser: true
                            }
                        }).then(async (s4dfrost_real_reply) => {
                            await delay(Number(5) * 1000);
                            s4dfrost_real_reply.delete();
                            s4dmessage.delete();

                        });
                    }
                } else {
                    s4dmessage.reply({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String('Vous n\'avez pas la permission d\'entrer cette commande !'))
                            .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                        ],
                        allowedMentions: {
                            repliedUser: true
                        }
                    }).then(async (s4dfrost_real_reply) => {
                        await delay(Number(5) * 1000);
                        s4dfrost_real_reply.delete();
                        s4dmessage.delete();

                    });
                }
            }
        }

    });

    // Join mp
    s4d.client.on('guildMemberAdd', async (param1) => {
        s4d.joiningMember = param1;
        if (s4d.database.get(String('ghostping')) == 'on') {
            if (s4d.database.has(String('ghostping_chanel0'))) {
                s4d.client.channels.cache.get(s4d.database.get(String('ghostping_chanel0'))).send({
                    content: String((['<@', s4d.joiningMember.id, '>'].join('')))
                });
                await delay(Number(1) * 1000);
                s4d.client.channels.cache.get(s4d.database.get(String('ghostping_chanel0'))).bulkDelete((1 | 1));
            }
            if (s4d.database.has(String('ghostping_chanel1'))) {
                s4d.client.channels.cache.get(s4d.database.get(String('ghostping_chanel1'))).send({
                    content: String((['<@', s4d.joiningMember.id, '>'].join('')))
                });
                await delay(Number(1) * 1000);
                s4d.client.channels.cache.get(s4d.database.get(String('ghostping_chanel1'))).bulkDelete((1 | 1));
            }
            if (s4d.database.has(String('ghostping_chanel2'))) {
                s4d.client.channels.cache.get(s4d.database.get(String('ghostping_chanel2'))).send({
                    content: String((['<@', s4d.joiningMember.id, '>'].join('')))
                });
                await delay(Number(1) * 1000);
                s4d.client.channels.cache.get(s4d.database.get(String('ghostping_chanel2'))).bulkDelete((1 | 1));
            }
            if (s4d.database.has(String('ghostping_chanel3'))) {
                s4d.client.channels.cache.get(s4d.database.get(String('ghostping_chanel3'))).send({
                    content: String((['<@', s4d.joiningMember.id, '>'].join('')))
                });
                await delay(Number(1) * 1000);
                s4d.client.channels.cache.get(s4d.database.get(String('ghostping_chanel3'))).bulkDelete((1 | 1));
            }
            if (s4d.database.has(String('ghostping_chanel4'))) {
                s4d.client.channels.cache.get(s4d.database.get(String('ghostping_chanel4'))).send({
                    content: String((['<@', s4d.joiningMember.id, '>'].join('')))
                });
                await delay(Number(1) * 1000);
                s4d.client.channels.cache.get(s4d.database.get(String('ghostping_chanel4'))).bulkDelete((1 | 1));
            }
            if (s4d.database.has(String('ghostping_chanel5'))) {
                s4d.client.channels.cache.get(s4d.database.get(String('ghostping_chanel5'))).send({
                    content: String((['<@', s4d.joiningMember.id, '>'].join('')))
                });
                await delay(Number(1) * 1000);
                s4d.client.channels.cache.get(s4d.database.get(String('ghostping_chanel5'))).bulkDelete((1 | 1));
            }
            if (s4d.database.has(String('ghostping_chanel6'))) {
                s4d.client.channels.cache.get(s4d.database.get(String('ghostping_chanel6'))).send({
                    content: String((['<@', s4d.joiningMember.id, '>'].join('')))
                });
                await delay(Number(1) * 1000);
                s4d.client.channels.cache.get(s4d.database.get(String('ghostping_chanel6'))).bulkDelete((1 | 1));
            }
        }
        s4d.joiningMember = null
    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'ghostping') {
            if ((s4dmessage.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
                if (s4d.database.get(String('ghostping')) == 'on') {
                    s4d.client.channels.cache.get(s4d.database.get(String('logs_bot'))).send({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('database_emoji'))) + '| Nouvelle action !')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String((['<a:item_anim_flche2:858272060567846952> **Commande:** `ghostpin`', '\n', '<a:item_anim_flche2:858272060567846952> **Exécuteur:** <@', (s4dmessage.author).id, '>', '\n', '<a:item_anim_flche2:858272060567846952> **Date création compte exécuteur:** `', moment((s4dmessage.author).createdAt).format('LLLL'), '`', '\n', '<a:item_anim_flche2:858272060567846952> **Serveur:** `', (s4dmessage.guild).name, '`', '\n', '<a:item_anim_flche2:858272060567846952> **Propriétaire du serveur:** <@', String((s4dmessage.guild).ownerId), '>', '\n', '', '', ''].join(''))))
                        ]
                    });
                    (s4dmessage.channel).send({
                        embeds: [new MessageEmbed()
                            .setTitle(String('<:business_perso_emoji_ping:925431173247807528> | Ghostping'))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String((['Appuyez sur les boutons ci-dessous afin d\'ajouter ou de retirer un salon au système de ghostping !', '\n', '\n', '➕ **| Ajouter =** Permet d\'ajouter des salons dans la liste.', '\n', '➖ **| Retirer =** Permet d\'ajouter des salons dans la liste.', '', '', '', '', ''].join(''))))
                        ],
                        components: [(new MessageActionRow()
                            .addComponents(new MessageButton()
                                .setCustomId('add')
                                .setLabel('Ajouter')
                                .setEmoji('➕')
                                .setStyle(('SECONDARY')),
                                new MessageButton()
                                .setCustomId('remove')
                                .setLabel('Retirer')
                                .setEmoji('➖')
                                .setStyle(('SECONDARY')),
                                new MessageButton()
                                .setCustomId('close')
                                .setEmoji('<:item_wrong:893872710260785163>')
                                .setStyle(('DANGER')),
                            ))]
                    }).then(m => {
                        let collector = m.createMessageComponentCollector({
                            filter: i => i.user.id === (s4dmessage.member).id,
                            time: 60000
                        });
                        collector.on('collect', async i => {
                            if ((i.customId) == 'add') {
                                (s4dmessage.channel).send(String(([s4d.database.get(String('question_emoji')), ' **| Veuillez mentionnez le salon à ajouter.**', '\n', '*Entrez `cancel` pour annuler.*', '', ''].join('')))).then(() => {
                                    (s4dmessage.channel).awaitMessages({
                                        filter: (m) => m.author.id === (s4dmessage.author).id,
                                        time: (5 * 60 * 1000),
                                        max: 1
                                    }).then(async (collected) => {
                                        s4d.reply = collected.first().content;
                                        s4d.message = collected.first();
                                        if (!((s4d.reply) == 'cancel')) {
                                            if (!s4d.database.has(String('ghostping_chanel0'))) {
                                                ghostping = (s4d.reply);
                                                ghostping2 = ghostping.slice(2, 20);
                                                s4d.database.set(String('ghostping_chanel0'), ghostping2);
                                                var embed = new Discord.MessageEmbed()
                                                embed.setTitle((String(s4d.database.get(String('good_emoji'))) + ' | Tout est bon !'));
                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                embed.setDescription('Salon ajouté de la base de donnés.');
                                                (s4dmessage.channel).send({
                                                    embeds: [embed]
                                                });

                                                await delay(Number(3) * 1000);
                                                (s4dmessage.channel).bulkDelete((2 | 1));
                                            } else if (!s4d.database.has(String('ghostping_chanel1'))) {
                                                ghostping = (s4d.reply);
                                                ghostping2 = ghostping.slice(2, 20);
                                                s4d.database.set(String('ghostping_chanel1'), ghostping2);
                                                var embed = new Discord.MessageEmbed()
                                                embed.setTitle((String(s4d.database.get(String('good_emoji'))) + ' | Tout est bon !'));
                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                embed.setDescription('Salon ajouté de la base de donnés.');
                                                (s4dmessage.channel).send({
                                                    embeds: [embed]
                                                });

                                                await delay(Number(3) * 1000);
                                                (s4dmessage.channel).bulkDelete((2 | 1));
                                            } else if (!s4d.database.has(String('ghostping_chanel2'))) {
                                                ghostping = (s4d.reply);
                                                ghostping2 = ghostping.slice(2, 20);
                                                s4d.database.set(String('ghostping_chanel2'), ghostping2);
                                                var embed = new Discord.MessageEmbed()
                                                embed.setTitle((String(s4d.database.get(String('good_emoji'))) + ' | Tout est bon !'));
                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                embed.setDescription('Salon ajouté de la base de donnés.');
                                                (s4dmessage.channel).send({
                                                    embeds: [embed]
                                                });

                                                await delay(Number(3) * 1000);
                                                (s4dmessage.channel).bulkDelete((2 | 1));
                                            } else if (!s4d.database.has(String('ghostping_chanel3'))) {
                                                ghostping = (s4d.reply);
                                                ghostping2 = ghostping.slice(2, 20);
                                                s4d.database.set(String('ghostping_chanel3'), ghostping2);
                                                var embed = new Discord.MessageEmbed()
                                                embed.setTitle((String(s4d.database.get(String('good_emoji'))) + ' | Tout est bon !'));
                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                embed.setDescription('Salon ajouté de la base de donnés.');
                                                (s4dmessage.channel).send({
                                                    embeds: [embed]
                                                });

                                                await delay(Number(3) * 1000);
                                                (s4dmessage.channel).bulkDelete((2 | 1));
                                            } else if (!s4d.database.has(String('ghostping_chanel4'))) {
                                                ghostping = (s4d.reply);
                                                ghostping2 = ghostping.slice(2, 20);
                                                s4d.database.set(String('ghostping_chanel4'), ghostping2);
                                                var embed = new Discord.MessageEmbed()
                                                embed.setTitle((String(s4d.database.get(String('good_emoji'))) + ' | Tout est bon !'));
                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                embed.setDescription('Salon ajouté de la base de donnés.');
                                                (s4dmessage.channel).send({
                                                    embeds: [embed]
                                                });

                                                await delay(Number(3) * 1000);
                                                (s4dmessage.channel).bulkDelete((2 | 1));
                                            } else if (!s4d.database.has(String('ghostping_chanel5'))) {
                                                ghostping = (s4d.reply);
                                                ghostping2 = ghostping.slice(2, 20);
                                                s4d.database.set(String('ghostping_chanel5'), ghostping2);
                                                var embed = new Discord.MessageEmbed()
                                                embed.setTitle((String(s4d.database.get(String('good_emoji'))) + ' | Tout est bon !'));
                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                embed.setDescription('Salon ajouté de la base de donnés.');
                                                (s4dmessage.channel).send({
                                                    embeds: [embed]
                                                });

                                                await delay(Number(3) * 1000);
                                                (s4dmessage.channel).bulkDelete((2 | 1));
                                            } else if (!s4d.database.has(String('ghostping_chanel6'))) {
                                                ghostping = (s4d.reply);
                                                ghostping2 = ghostping.slice(2, 20);
                                                s4d.database.set(String('ghostping_chanel6'), ghostping2);
                                                var embed = new Discord.MessageEmbed()
                                                embed.setTitle((String(s4d.database.get(String('good_emoji'))) + ' | Tout est bon !'));
                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                embed.setDescription('Salon ajouté de la base de donnés.');
                                                (s4dmessage.channel).send({
                                                    embeds: [embed]
                                                });

                                                await delay(Number(3) * 1000);
                                                (s4dmessage.channel).bulkDelete((2 | 1));
                                            } else {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setTitle((String(s4d.database.get(String('error_emoji'))) + ' | Un erreur est survenue !'));
                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                embed.setDescription('Vous avez atteint la limite de salon *(Limite = 6 salons)* !');
                                                (s4dmessage.channel).send({
                                                    embeds: [embed]
                                                });

                                            }
                                        } else {
                                            var embed = new Discord.MessageEmbed()
                                            embed.setTitle((String(s4d.database.get(String('error_emoji'))) + ' | Un erreur est survenue !'));
                                            embed.setColor(s4d.database.get(String('embed_color')));
                                            embed.setDescription('Commande annulée !');
                                            (s4dmessage.channel).send({
                                                embeds: [embed]
                                            });

                                        }

                                        s4d.reply = null;
                                    }).catch(async (e) => {
                                        console.error(e);
                                    });
                                })
                            }
                            if ((i.customId) == 'remove') {
                                (s4dmessage.channel).send(String(([s4d.database.get(String('question_emoji')), ' **| Veuillez mentionnez le salon à retirer.**', '\n', '*Entrez `cancel` pour annuler.*', '', ''].join('')))).then(() => {
                                    (s4dmessage.channel).awaitMessages({
                                        filter: (m) => m.author.id === (s4dmessage.author).id,
                                        time: (5 * 60 * 1000),
                                        max: 1
                                    }).then(async (collected) => {
                                        s4d.reply = collected.first().content;
                                        s4d.message = collected.first();
                                        if (!((s4d.reply) == 'cancel')) {
                                            ghostping = (s4d.reply);
                                            ghostping2 = ghostping.slice(2, 20);
                                            if (s4d.database.has(String('ghostping_chanel0')) && s4d.database.get(String('ghostping_chanel0')) == ghostping2) {
                                                s4d.database.delete(String('ghostping_chanel0'));
                                                var embed = new Discord.MessageEmbed()
                                                embed.setTitle((String(s4d.database.get(String('good_emoji'))) + ' | Tout est bon !'));
                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                embed.setDescription('Salon retiré de la base de donnés.');
                                                (s4dmessage.channel).send({
                                                    embeds: [embed]
                                                });

                                                await delay(Number(3) * 1000);
                                                (s4dmessage.channel).bulkDelete((2 | 1));
                                            } else if (s4d.database.has(String('ghostping_chanel1')) && s4d.database.get(String('ghostping_chanel1')) == ghostping2) {
                                                s4d.database.delete(String('ghostping_chanel1'));
                                                var embed = new Discord.MessageEmbed()
                                                embed.setTitle((String(s4d.database.get(String('good_emoji'))) + ' | Tout est bon !'));
                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                embed.setDescription('Salon retiré de la base de donnés.');
                                                (s4dmessage.channel).send({
                                                    embeds: [embed]
                                                });

                                                await delay(Number(3) * 1000);
                                                (s4dmessage.channel).bulkDelete((2 | 1));
                                            } else if (s4d.database.has(String('ghostping_chanel2')) && s4d.database.get(String('ghostping_chanel2')) == ghostping2) {
                                                s4d.database.delete(String('ghostping_chanel2'));
                                                var embed = new Discord.MessageEmbed()
                                                embed.setTitle((String(s4d.database.get(String('good_emoji'))) + ' | Tout est bon !'));
                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                embed.setDescription('Salon retiré de la base de donnés.');
                                                (s4dmessage.channel).send({
                                                    embeds: [embed]
                                                });

                                                await delay(Number(3) * 1000);
                                                (s4dmessage.channel).bulkDelete((2 | 1));
                                            } else if (s4d.database.has(String('ghostping_chanel3')) && s4d.database.get(String('ghostping_chanel3')) == ghostping2) {
                                                s4d.database.delete(String('ghostping_chanel3'));
                                                var embed = new Discord.MessageEmbed()
                                                embed.setTitle((String(s4d.database.get(String('good_emoji'))) + ' | Tout est bon !'));
                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                embed.setDescription('Salon retiré de la base de donnés.');
                                                (s4dmessage.channel).send({
                                                    embeds: [embed]
                                                });

                                                await delay(Number(3) * 1000);
                                                (s4dmessage.channel).bulkDelete((2 | 1));
                                            } else if (s4d.database.has(String('ghostping_chanel4')) && s4d.database.get(String('ghostping_chanel4')) == ghostping2) {
                                                s4d.database.delete(String('ghostping_chanel4'));
                                                var embed = new Discord.MessageEmbed()
                                                embed.setTitle((String(s4d.database.get(String('good_emoji'))) + ' | Tout est bon !'));
                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                embed.setDescription('Salon retiré de la base de donnés.');
                                                (s4dmessage.channel).send({
                                                    embeds: [embed]
                                                });

                                                await delay(Number(3) * 1000);
                                                (s4dmessage.channel).bulkDelete((2 | 1));
                                            } else if (s4d.database.has(String('ghostping_chanel5')) && s4d.database.get(String('ghostping_chanel5')) == ghostping2) {
                                                s4d.database.delete(String('ghostping_chanel5'));
                                                var embed = new Discord.MessageEmbed()
                                                embed.setTitle((String(s4d.database.get(String('good_emoji'))) + ' | Tout est bon !'));
                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                embed.setDescription('Salon retiré de la base de donnés.');
                                                (s4dmessage.channel).send({
                                                    embeds: [embed]
                                                });

                                                await delay(Number(3) * 1000);
                                                (s4dmessage.channel).bulkDelete((2 | 1));
                                            } else if (s4d.database.has(String('ghostping_chanel6')) && s4d.database.get(String('ghostping_chanel6')) == ghostping2) {
                                                s4d.database.delete(String('ghostping_chanel6'));
                                                var embed = new Discord.MessageEmbed()
                                                embed.setTitle((String(s4d.database.get(String('good_emoji'))) + ' | Tout est bon !'));
                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                embed.setDescription('Salon retiré de la base de donnés.');
                                                (s4dmessage.channel).send({
                                                    embeds: [embed]
                                                });

                                                await delay(Number(3) * 1000);
                                                (s4dmessage.channel).bulkDelete((2 | 1));
                                            } else {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setTitle((String(s4d.database.get(String('error_emoji'))) + ' | Un erreur est survenue !'));
                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                embed.setDescription('Salon introuvable !');
                                                (s4dmessage.channel).send({
                                                    embeds: [embed]
                                                });

                                            }
                                        } else {
                                            var embed = new Discord.MessageEmbed()
                                            embed.setTitle((String(s4d.database.get(String('error_emoji'))) + ' | Un erreur est survenue !'));
                                            embed.setColor(s4d.database.get(String('embed_color')));
                                            embed.setDescription('Commande annulée !');
                                            (s4dmessage.channel).send({
                                                embeds: [embed]
                                            });

                                        }

                                        s4d.reply = null;
                                    }).catch(async (e) => {
                                        console.error(e);
                                    });
                                })
                            }
                            if ((i.customId) == 'close') {
                                await i.update({
                                    content: String('**Menu Expiré**'),
                                    components: [(new MessageActionRow()
                                        .addComponents(new MessageButton()
                                            .setCustomId('add')
                                            .setLabel('Ajouter')
                                            .setEmoji('➕')
                                            .setStyle(('SECONDARY')),
                                            new MessageButton()
                                            .setCustomId('remove')
                                            .setLabel('Retirer')
                                            .setEmoji('➖')
                                            .setStyle(('SECONDARY')),
                                            new MessageButton()
                                            .setCustomId('close')
                                            .setEmoji('<:item_wrong:893872710260785163>')
                                            .setStyle(('DANGER')),
                                        ))]
                                }).then(m => {

                                });
                            }

                        })

                    });
                } else {
                    s4dmessage.channel.send({
                        embeds: [new MessageEmbed()
                            .setTitle(String(('' + ' | Un erreur est survenue !')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String('Vous devez d\'abord mettre le système de ghostping sur `on` !'))
                        ]
                    });
                }
            }
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'quota_config') {
            if ((s4dmessage.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR) || ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.get('854718305012547605')).id))) {
                (s4dmessage.channel).send({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('settings_emoji'))) + '__** | Configuration des quotas')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String('Avec les différents boutons, configurez les quotas !'))
                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                    ],
                    components: [(new MessageActionRow()
                        .addComponents(new MessageButton()
                            .setCustomId('add_quota')
                            .setLabel('Ajouter un équipier')
                            .setEmoji('➕')
                            .setStyle(('SECONDARY')),
                            new MessageButton()
                            .setCustomId('remove_quota')
                            .setLabel('Retirer un équipier')
                            .setEmoji('➖')
                            .setStyle(('SECONDARY')),
                        ))]
                }).then(m => {
                    let collector = m.createMessageComponentCollector({
                        filter: i => i.user.id === (s4dmessage.member).id,
                        time: 60000
                    });
                    collector.on('collect', async i => {
                        if ((i.customId) == 'remove_quota') {
                            (s4dmessage.channel).send(String('<:bot_community:986667100343001109> | Quel est l\'utilisateur en question ?')).then(() => {
                                (s4dmessage.channel).awaitMessages({
                                    filter: (m) => m.author.id === (s4dmessage.member).id,
                                    time: (5 * 60 * 1000),
                                    max: 1
                                }).then(async (collected) => {
                                    s4d.reply = collected.first().content;
                                    s4d.message = collected.first();
                                    if (((s4d.reply) || '').startsWith('<@' || '')) {
                                        member_quota_args = (s4d.reply);
                                        member_quota = member_quota_args.slice(2, 20);
                                        s4d.database.delete(String((String(member_quota) + '-quota')));
                                        s4dmessage.reply({
                                            embeds: [new MessageEmbed()
                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + '__** | Informations sauvegardées !**__')))
                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                .setDescription(String('Utilisateur supprimé'))
                                            ],
                                            allowedMentions: {
                                                repliedUser: true
                                            }
                                        });
                                        await delay(Number(2) * 1000);
                                        (s4dmessage.channel).bulkDelete((2 | 1));
                                    } else {
                                        s4d.database.delete(String((String(s4d.reply) + '-quota')));
                                        s4dmessage.reply({
                                            embeds: [new MessageEmbed()
                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + '__** | Informations sauvegardées !**__')))
                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                .setDescription(String('Utilisateur supprimé'))
                                            ],
                                            allowedMentions: {
                                                repliedUser: true
                                            }
                                        });
                                        await delay(Number(2) * 1000);
                                        (s4dmessage.channel).bulkDelete((2 | 1));
                                    }

                                    s4d.reply = null;
                                }).catch(async (e) => {
                                    console.error(e);
                                    s4dmessage.reply({
                                        embeds: [new MessageEmbed()
                                            .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                                            .setColor(String(s4d.database.get(String('embed_color'))))
                                            .setDescription(String('Vous avez mis trop de temps pour répondre !'))
                                        ],
                                        allowedMentions: {
                                            repliedUser: true
                                        }
                                    });
                                    await delay(Number(2) * 1000);
                                    (s4dmessage.channel).bulkDelete((2 | 1));
                                });
                            })
                        }
                        if ((i.customId) == 'add_quota') {
                            (s4dmessage.channel).send(String('<:bot_community:986667100343001109> | Quel est l\'utilisateur en question ?')).then(() => {
                                (s4dmessage.channel).awaitMessages({
                                    filter: (m) => m.author.id === (s4dmessage.member).id,
                                    time: (5 * 60 * 1000),
                                    max: 1
                                }).then(async (collected) => {
                                    s4d.reply = collected.first().content;
                                    s4d.message = collected.first();
                                    if (((s4d.reply) || '').startsWith('<@' || '')) {
                                        member_quota_args = (s4d.reply);
                                        member_quota = member_quota_args.slice(2, 20);
                                        s4d.database.set(String((String((s4dmessage.author).id) + '-user_quota_args')), member_quota);
                                        s4dmessage.reply({
                                            embeds: [new MessageEmbed()
                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + '__** | Informations sauvegardées !**__')))
                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                .setDescription(String('Toutes les informations ont bien été sauvegardées '))
                                            ],
                                            allowedMentions: {
                                                repliedUser: true
                                            }
                                        });
                                        await delay(Number(2) * 1000);
                                        (s4dmessage.channel).bulkDelete((2 | 1));
                                        (s4dmessage.channel).send(String('<:bot_community:986667100343001109> | Quel est le nombre de vérifications actuel de cet utilisateur ?')).then(() => {
                                            (s4dmessage.channel).awaitMessages({
                                                filter: (m) => m.author.id === (s4dmessage.member).id,
                                                time: (5 * 60 * 1000),
                                                max: 1
                                            }).then(async (collected) => {
                                                s4d.reply = collected.first().content;
                                                s4d.message = collected.first();
                                                s4d.database.set(String((String((s4dmessage.author).id) + '-verif_number_quota')), (s4d.reply));
                                                s4d.database.set(String((String(s4d.database.get(String((String((s4dmessage.author).id) + '-user_quota_args')))) + '-quota')), (s4d.database.get(String((String((s4dmessage.author).id) + '-verif_number_quota'))) + 50));
                                                s4dmessage.reply({
                                                    embeds: [new MessageEmbed()
                                                        .setTitle(String((String(s4d.database.get(String('save_emoji'))) + '__** | Informations sauvegardées !**__')))
                                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                                        .setDescription(String('Configuration de cet utilisateur terminée !'))
                                                    ],
                                                    allowedMentions: {
                                                        repliedUser: true
                                                    }
                                                });
                                                await delay(Number(2) * 1000);
                                                (s4dmessage.channel).bulkDelete((2 | 1));

                                                s4d.reply = null;
                                            }).catch(async (e) => {
                                                console.error(e);
                                                s4dmessage.reply({
                                                    embeds: [new MessageEmbed()
                                                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                                        .setDescription(String('Vous avez mis trop de temps pour répondre !'))
                                                    ],
                                                    allowedMentions: {
                                                        repliedUser: true
                                                    }
                                                });
                                                await delay(Number(2) * 1000);
                                                (s4dmessage.channel).bulkDelete((2 | 1));
                                            });
                                        })
                                    } else {
                                        s4d.database.set(String((String((s4dmessage.author).id) + '-user_quota_args')), (s4d.reply));
                                        s4dmessage.reply({
                                            embeds: [new MessageEmbed()
                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + '__** | Informations sauvegardées !**__')))
                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                .setDescription(String('Toutes les informations ont bien été sauvegardées '))
                                            ],
                                            allowedMentions: {
                                                repliedUser: true
                                            }
                                        });
                                        await delay(Number(2) * 1000);
                                        (s4dmessage.channel).bulkDelete((2 | 1));
                                        (s4dmessage.channel).send(String('<:bot_community:986667100343001109> | Quel est le nombre de vérifications actuel de cet utilisateur ?')).then(() => {
                                            (s4dmessage.channel).awaitMessages({
                                                filter: (m) => m.author.id === (s4dmessage.member).id,
                                                time: (5 * 60 * 1000),
                                                max: 1
                                            }).then(async (collected) => {
                                                s4d.reply = collected.first().content;
                                                s4d.message = collected.first();
                                                s4d.database.set(String((String((s4dmessage.author).id) + '-verif_number_quota')), (s4d.reply));
                                                s4d.database.set(String((String(s4d.database.get(String((String((s4dmessage.author).id) + '-user_quota_args')))) + '-quota')), (s4d.database.get(String((String((s4dmessage.author).id) + '-verif_number_quota'))) + 50));
                                                s4dmessage.reply({
                                                    embeds: [new MessageEmbed()
                                                        .setTitle(String((String(s4d.database.get(String('save_emoji'))) + '__** | Informations sauvegardées !**__')))
                                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                                        .setDescription(String('Configuration de cet utilisateur terminée !'))
                                                    ],
                                                    allowedMentions: {
                                                        repliedUser: true
                                                    }
                                                });
                                                await delay(Number(2) * 1000);
                                                (s4dmessage.channel).bulkDelete((2 | 1));

                                                s4d.reply = null;
                                            }).catch(async (e) => {
                                                console.error(e);
                                                s4dmessage.reply({
                                                    embeds: [new MessageEmbed()
                                                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                                        .setDescription(String('Vous avez mis trop de temps pour répondre !'))
                                                    ],
                                                    allowedMentions: {
                                                        repliedUser: true
                                                    }
                                                });
                                                await delay(Number(2) * 1000);
                                                (s4dmessage.channel).bulkDelete((2 | 1));
                                            });
                                        })
                                    }

                                    s4d.reply = null;
                                }).catch(async (e) => {
                                    console.error(e);
                                    s4dmessage.reply({
                                        embeds: [new MessageEmbed()
                                            .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                                            .setColor(String(s4d.database.get(String('embed_color'))))
                                            .setDescription(String('Vous avez mis trop de temps pour répondre !'))
                                        ],
                                        allowedMentions: {
                                            repliedUser: true
                                        }
                                    });
                                    await delay(Number(2) * 1000);
                                    (s4dmessage.channel).bulkDelete((2 | 1));
                                });
                            })
                        }

                    })

                });
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String('Vous n\'avez pas la permission d\'entrer cette commande !'))
                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();
                    s4dmessage.delete();

                });
            }
        }
        if ((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'quota') {
            if ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.find((role) => role.name === '🛎️┊Staff')).id)) {
                if (((s4dmessage.channel).id) == '801509666890186803' || ((s4dmessage.channel).id) == '800364480461537280') {
                    s4dmessage.reply({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('ticket_emoji'))) + '__** | Quota**__')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String((['Votre objectif est de *`', s4d.database.get(String((String((s4dmessage.author).id) + '-quota'))), ' vérifications publicitaires`* cette semaine.'].join(''))))
                            .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                        ],
                        allowedMentions: {
                            repliedUser: true
                        }
                    });
                } else {
                    s4dmessage.reply({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String(`Vous devez poster la commande dans un salon privé !

        Ex: *<#801509666890186803> et <#800364480461537280>*`))
                            .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                        ],
                        allowedMentions: {
                            repliedUser: true
                        }
                    }).then(async (s4dfrost_real_reply) => {
                        await delay(Number(5) * 1000);
                        s4dfrost_real_reply.delete();
                        s4dmessage.delete();

                    });
                }
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String('Vous n\'avez pas la permission d\'entrer cette commande !'))
                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();
                    s4dmessage.delete();

                });
            }
        }
        if (((s4dmessage.content) || '').startsWith((String(s4d.database.get(String('prefix'))) + 'quota') || '')) {
            if (!((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'quota')) {
                if ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.find((role) => role.name === '🛎️┊Staff')).id)) {
                    if (((s4dmessage.channel).id) == '801509666890186803' || ((s4dmessage.channel).id) == '800364480461537280') {
                        member_quota_args = (s4dmessage.content).split(' ');
                        member_quota = member_quota_args.splice(1, 1)[0];
                        if ((member_quota || '').startsWith('<@' || '')) {
                            s4dmessage.reply({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('ticket_emoji'))) + '__** | Quota**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((['Cet utilisateur a un objectif de *`', s4d.database.get(String((String((s4dmessage.mentions.members.first().user).id) + '-quota'))), ' vérifications publicitaires`* cette semaine.'].join(''))))
                                    .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                ],
                                allowedMentions: {
                                    repliedUser: true
                                }
                            });
                        } else {
                            s4dmessage.reply({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('ticket_emoji'))) + '__** | Quota**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((['Cet utilisateur a un objectif de *`', s4d.database.get(String((String(member_quota) + '-quota'))), ' vérifications publicitaires`* cette semaine.'].join(''))))
                                    .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                ],
                                allowedMentions: {
                                    repliedUser: true
                                }
                            });
                        }
                    } else {
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String(`Vous devez poster la commande dans un salon privé !

          Ex: *<#801509666890186803> et <#800364480461537280>*`))
                                .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                            ],
                            allowedMentions: {
                                repliedUser: true
                            }
                        }).then(async (s4dfrost_real_reply) => {
                            await delay(Number(5) * 1000);
                            s4dfrost_real_reply.delete();
                            s4dmessage.delete();

                        });
                    }
                } else {
                    s4dmessage.reply({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String('Vous n\'avez pas la permission d\'entrer cette commande !'))
                            .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                        ],
                        allowedMentions: {
                            repliedUser: true
                        }
                    }).then(async (s4dfrost_real_reply) => {
                        await delay(Number(5) * 1000);
                        s4dfrost_real_reply.delete();
                        s4dmessage.delete();

                    });
                }
            }
        }

    });

    await s4d.client.login('***').catch((e) => {
        s4d.tokenInvalid = true;
        s4d.tokenError = e;
        if (e.toString().toLowerCase().includes("token")) {
            throw new Error("An invalid token was provided!")
        } else {
            throw new Error("Intents are not turned on!")
        }
    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if (((s4dmessage.content) || '').startsWith((String(s4d.database.get(String('prefix'))) + 'demote') || '')) {
            if ((s4dmessage.author)._roles.includes(((s4dmessage.guild).roles.cache.get('790517358548484158')).id)) {
                recrue_args = (s4dmessage.content).split(' ');
                recrue = recrue_args.splice(1, 1)[0];
                if (!(recrue == '')) {
                    if ((recrue || '').startsWith('<@' || '')) {
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790517365435006977')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('876530057819086869')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790517364407140352')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790872809777135627')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790517363388710913')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('900255350547177492')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790517363061424128')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790517362419302460')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790517357729677333')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790517360314417162')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('854718305012547605')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('900256414730178570')));
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('banned_emoji'))) + '__** | Les rôles ont bien été retirés !**__')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String('Tous les rôles staff ont bien été retirés !'))
                                .setFooter(String(('Demandé par ' + String((s4dmessage.author).id))))
                            ],
                            allowedMentions: {
                                repliedUser: true
                            }
                        });
                    } else {
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790517365435006977')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('876530057819086869')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790517364407140352')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790872809777135627')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790517363388710913')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('900255350547177492')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790517363061424128')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790517362419302460')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790517357729677333')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790517360314417162')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('854718305012547605')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('900256414730178570')));
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('banned_emoji'))) + '__** | Les rôles ont bien été retirés !**__')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String('Tous les rôles staff ont bien été retirés !'))
                                .setFooter(String(('Demandé par ' + String((s4dmessage.author).id))))
                            ],
                            allowedMentions: {
                                repliedUser: true
                            }
                        });
                    }
                } else {
                    s4dmessage.reply({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String('Veuillez renseigner un utilisateur !'))
                            .setFooter(String(('Demandé par ' + String((s4dmessage.author).id))))
                        ],
                        allowedMentions: {
                            repliedUser: true
                        }
                    }).then(async (s4dfrost_real_reply) => {
                        await delay(Number(5) * 1000);
                        s4dfrost_real_reply.delete();
                        s4dmessage.delete();

                    });
                }
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String('Vous n\'avez pas la permission d\'entrer cette commande ! '))
                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).id))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();
                    s4dmessage.delete();

                });
            }
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'lock') {
            if ((s4dmessage.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
                s4d.database.set(String((String((s4dmessage.channel).id) + '-lock')), ((s4dmessage.channel).name));
                (s4dmessage.channel).permissionOverwrites.edit(((s4dmessage.guild).roles.cache.find((role) => role.name === '@everyone')), {
                    SEND_MESSAGES: false
                });
                (s4dmessage.channel).permissionOverwrites.edit(((s4dmessage.guild).roles.cache.get('790517376172294174')), {
                    SEND_MESSAGES: false
                });
                (s4dmessage.channel).setName(('🔐' + String(s4d.database.get(String((String((s4dmessage.channel).id) + '-lock'))))))
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Salon lock !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String((['Le salon a bien été bloqué !', '', ''].join(''))))
                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                });
                s4d.client.channels.cache.get(s4d.database.get(String('logs_bot'))).send({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Salon lock !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String((['**<:bot_link:986666351139651654> | Salon fermé:** ```', s4d.database.get(String((String((s4dmessage.channel).id) + '-lock'))), ' / ', (s4dmessage.channel).id, '```', '\n', '**<:bot_shield:986666382735339550> | Auteur:** ```', (s4dmessage.author).tag, ' / ', (s4dmessage.author).id, '```'].join(''))))
                    ]
                });
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String('Vous n\'avez pas la permission d\'entrer cette commande !'))
                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();
                    s4dmessage.delete();

                });
            }
        }
        if ((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'unlock') {
            if ((s4dmessage.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
                (s4dmessage.channel).permissionOverwrites.edit(((s4dmessage.guild).roles.cache.find((role) => role.name === '@everyone')), {
                    SEND_MESSAGES: true
                });
                (s4dmessage.channel).permissionOverwrites.edit(((s4dmessage.guild).roles.cache.get('790517376172294174')), {
                    SEND_MESSAGES: true
                });
                (s4dmessage.channel).setName(s4d.database.get(String((String((s4dmessage.channel).id) + '-lock'))))
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Salon unlock !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String((['Le salon a bien été débloqué !', '', ''].join(''))))
                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                });
                s4d.client.channels.cache.get(s4d.database.get(String('logs_bot'))).send({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Salon unlock !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String((['**<:bot_link:986666351139651654> | Salon rouvert:** ```', s4d.database.get(String((String((s4dmessage.channel).id) + '-lock'))), ' / ', (s4dmessage.channel).id, '```', '\n', '**<:bot_shield:986666382735339550> | Auteur:** ```', (s4dmessage.author).tag, ' / ', (s4dmessage.author).id, '```'].join(''))))
                    ]
                });
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String('Vous n\'avez pas la permission d\'entrer cette commande !'))
                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();
                    s4dmessage.delete();

                });
            }
        }
        if (s4d.database.get(String('rules_cooldown')) <= (Math.floor(new Date().getTime() / 1000))) {
            if (s4d.database.get(String('rules_count')) == '1') {
                s4d.database.set(String('rules_count'), '0');
                s4d.client.channels.cache.find((channel) => channel.name === '📖・informations').permissionOverwrites.edit(((s4dmessage.guild).roles.cache.find((role) => role.name === '@everyone')), {
                    VIEW_CHANNEL: true
                });
                s4d.client.channels.cache.find((channel) => channel.name === '📖・informations').permissionOverwrites.edit(((s4dmessage.guild).roles.cache.get('790517376172294174')), {
                    VIEW_CHANNEL: true
                });
                s4d.client.channels.cache.get(s4d.database.get(String('logs_bot'))).send({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('save_emoji'))) + '__** | Le salon règlement est de nouveau visible !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String(([`**<:bot_link:986666351139651654> | Salon visible:** \`\`\`#📖・informations\`\`\`
      **<:bot_shield:986666382735339550> | Auteur:** \`\`\``, (s4dmessage.author).tag, ' / ', (s4dmessage.author).id, '```'].join(''))))
                    ]
                });
            }
        }
        if ((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'rules') {
            if ((s4dmessage.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR) || ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.get('854718305012547605')).id))) {
                s4d.database.set(String('rules_cooldown'), ((Math.floor(new Date().getTime() / 1000)) + 1800));
                s4d.database.set(String('rules_count'), '1');
                s4d.client.channels.cache.find((channel) => channel.name === '📖・informations').permissionOverwrites.edit(((s4dmessage.guild).roles.cache.find((role) => role.name === '@everyone')), {
                    VIEW_CHANNEL: false
                });
                s4d.client.channels.cache.find((channel) => channel.name === '📖・informations').permissionOverwrites.edit(((s4dmessage.guild).roles.cache.get('790517376172294174')), {
                    VIEW_CHANNEL: false
                });
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Règlement caché**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String(([`Le règlement a bien été caché aux membres du serveur !

      Le salon sera rendu visible dans \``, s4d.database.get(String('rules_cooldown')) - (Math.floor(new Date().getTime() / 1000)), ' secondes` !'].join(''))))
                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                });
                s4d.client.channels.cache.get(s4d.database.get(String('logs_bot'))).send({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Le salon règlement a été caché !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String(([`**<:bot_link:986666351139651654> | Salon caché:** \`\`\`#📖・informations\`\`\`
      **<:bot_shield:986666382735339550> | Auteur:** \`\`\``, (s4dmessage.author).tag, ' / ', (s4dmessage.author).id, '```'].join(''))))
                    ]
                });
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String('Vous n\'avez pas la permission d\'entrer cette commande !'))
                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();
                    s4dmessage.delete();

                });
            }
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if (((s4dmessage.content) || '').startsWith((String(s4d.database.get(String('prefix'))) + 'demote_staff') || '')) {
            if (((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.find((role) => role.name === '🎓┊Super Admin')).id)) || (s4dmessage.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
                recrue_args = (s4dmessage.content).split(' ');
                recrue = recrue_args.splice(1, 1)[0];
                if (!(recrue == '')) {
                    if ((recrue || '').startsWith('<@' || '')) {
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790517365435006977')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('876530057819086869')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790517364407140352')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790872809777135627')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790517363388710913')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('900255350547177492')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790517363061424128')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790517362419302460')));
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('banned_emoji'))) + '__** | Les rôles ont bien été retirés !**__')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String('Tous les rôles staff ont bien été retirés !'))
                                .setFooter(String(('Demandé par ' + String((s4dmessage.author).id))))
                            ],
                            allowedMentions: {
                                repliedUser: true
                            }
                        });
                    } else {
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790517365435006977')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('876530057819086869')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790517364407140352')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790872809777135627')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790517363388710913')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('900255350547177492')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790517363061424128')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790517362419302460')));
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('banned_emoji'))) + '__** | Les rôles ont bien été retirés !**__')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String('Tous les rôles staff ont bien été retirés !'))
                                .setFooter(String(('Demandé par ' + String((s4dmessage.author).id))))
                            ],
                            allowedMentions: {
                                repliedUser: true
                            }
                        });
                    }
                } else {
                    s4dmessage.reply({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String('Veuillez renseigner un utilisateur !'))
                            .setFooter(String(('Demandé par ' + String((s4dmessage.author).id))))
                        ],
                        allowedMentions: {
                            repliedUser: true
                        }
                    }).then(async (s4dfrost_real_reply) => {
                        await delay(Number(5) * 1000);
                        s4dfrost_real_reply.delete();
                        s4dmessage.delete();

                    });
                }
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String('Vous n\'avez pas la permission d\'entrer cette commande ! '))
                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).id))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();
                    s4dmessage.delete();

                });
            }
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if (((s4dmessage.content) || '').startsWith((String(s4d.database.get(String('prefix'))) + 'recrue') || '')) {
            if (((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.find((role) => role.name === '🎓┊Super Admin')).id)) || (s4dmessage.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
                recrue_args = (s4dmessage.content).split(' ');
                recrue = recrue_args.splice(1, 1)[0];
                if (!(recrue == '')) {
                    if ((recrue || '').startsWith('<@' || '')) {
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790517365435006977')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('876530057819086869')));
                        (s4dmessage.mentions.members.first()).roles.add(((s4dmessage.guild).roles.cache.get('790517364407140352')));
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Les grades ont bien été ajoutés !**__')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String('Le rôle de modérateur a bien été ajouté !'))
                                .setFooter(String(('Demandé par ' + String((s4dmessage.author).id))))
                            ],
                            allowedMentions: {
                                repliedUser: true
                            }
                        });
                    } else {
                        (((s4dmessage.guild).members.cache.get(recrue) || await (s4dmessage.guild).members.fetch(recrue))).roles.add(((s4dmessage.guild).roles.cache.get('790517365435006977')));
                        (((s4dmessage.guild).members.cache.get(recrue) || await (s4dmessage.guild).members.fetch(recrue))).roles.add(((s4dmessage.guild).roles.cache.get('876530057819086869')));
                        (((s4dmessage.guild).members.cache.get(recrue) || await (s4dmessage.guild).members.fetch(recrue))).roles.add(((s4dmessage.guild).roles.cache.get('790517364407140352')));
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Les grades ont bien été ajoutés !**__')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String('Le rôle de modérateur a bien été ajouté !'))
                                .setFooter(String(('Demandé par ' + String((s4dmessage.author).id))))
                            ],
                            allowedMentions: {
                                repliedUser: true
                            }
                        });
                    }
                } else {
                    s4dmessage.reply({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String('Veuillez renseigner un utilisateur !'))
                            .setFooter(String(('Demandé par ' + String((s4dmessage.author).id))))
                        ],
                        allowedMentions: {
                            repliedUser: true
                        }
                    }).then(async (s4dfrost_real_reply) => {
                        await delay(Number(5) * 1000);
                        s4dfrost_real_reply.delete();
                        s4dmessage.delete();

                    });
                }
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String('Vous n\'avez pas la permission d\'entrer cette commande ! '))
                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).id))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();
                    s4dmessage.delete();

                });
            }
        }

    });

    s4d.client.on('ready', async () => {
        s4d.client.user.setPresence({
            status: "online",
            activities: [{
                name: ((s4d.client.guilds.cache.get('693782891360157726')).name),
                type: "LISTENING"
            }]
        });

    });

    // coiffeur
    s4d.client.on('messageCreate', async (s4dmessage) => {
        if (s4dmessage.author.bot) {
            return;
        }
        if (((s4dmessage.channel).id) == s4d.database.get(String('anecdotes_chanel'))) {
            if (s4d.database.get(String('anecdote_config')) == 'on') {
                if (!s4d.database.has(String((String((s4dmessage.author).id) + '-debug_anec'))) || (Math.floor(new Date().getTime() / 1000)) <= s4d.database.get(String((String((s4dmessage.author).id) + '-debug_anec')))) {
                    s4d.database.add(String('anecdotes-number'), parseInt(1));
                    s4dmessage.channel.send({
                        embeds: [new MessageEmbed()
                            .setTitle(String(([s4d.database.get(String('premium_emoji')), '__** | Anecdote numéro `', s4d.database.get(String('anecdotes-number')), '` !**__'].join(''))))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String((['```', s4dmessage.content, '```'].join(''))))
                            .setFooter(String(('Anecdote racontée par ' + String((s4dmessage.author).tag))))
                        ]
                    });
                    s4d.database.set(String((String((s4dmessage.author).id) + '-debug_anec')), ((Math.floor(new Date().getTime() / 1000)) + 1000));
                    s4dmessage.delete();
                }
            }
        }

    });

    // coiffeur
    s4d.client.on('messageCreate', async (s4dmessage) => {
        if (s4dmessage.author.bot) {
            return;
        }
        if (((s4dmessage.channel).id) == s4d.database.get(String('suggest_chanel'))) {
            if (s4d.database.get(String('suggest_config')) == 'on') {
                s4dmessage.delete();
                s4dmessage.channel.send({
                    embeds: [new MessageEmbed()
                        .setTitle(String('<:bot_accepted:988550397868273775> | __**Nouvel Avis posté !**__'))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String((['```', s4dmessage.content, `\`\`\`

      <:bot_accepted:988550397868273775> = *Avis constructif (Remerciements).*
      <:bot_denied:988551663759548457> = *Avis non constructif (Lorsque cette réaction possède la majorité, il est conseillé de ne pas prendre compte du message ! ).*`].join(''))))
                        .setFooter(String(('Avis donné par ' + String((s4dmessage.author).tag))))
                    ]
                }).then(async (s4dreply) => {
                    s4dreply.react('<:bot_accepted:988550397868273775>');
                    s4dreply.react('<:bot_denied:988551663759548457>');

                });
            }
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'xp') {
            if (s4d.database.get(String('level_config')) == 'on') {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('level_emoji'))) + '** | XP**')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String((['Vous avez atteint les `', s4d.database.get(String((String((s4dmessage.author).id) + '-xp'))), '/500`XP !'].join(''))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                });
            }
        }
        if (((s4dmessage.content) || '').startsWith((String(s4d.database.get(String('prefix'))) + 'xp') || '')) {
            if (s4d.database.get(String('level_config')) == 'on') {
                xp_args = (s4dmessage.content).split(' ');
                xp = xp_args.splice(1, 1)[0];
                if ((xp || '').startsWith('<@' || '')) {
                    if (!s4d.database.has(String((String((s4dmessage.mentions.members.first().user).id) + '-xp')))) {
                        s4d.database.set(String((String((s4dmessage.mentions.members.first().user).id) + '-xp')), '0');
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('level_emoji'))) + '** | XP**')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String(([(s4dmessage.mentions.members.first().user).username, ' a atteint les `', s4d.database.get(String((String((s4dmessage.mentions.members.first().user).id) + '-xp'))), '/500`XP !'].join(''))))
                            ],
                            allowedMentions: {
                                repliedUser: true
                            }
                        });
                    } else {
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('level_emoji'))) + '** | XP**')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String(([(s4dmessage.mentions.members.first().user).username, ' a atteint les `', s4d.database.get(String((String((s4dmessage.mentions.members.first().user).id) + '-xp'))), '/500`XP !'].join(''))))
                            ],
                            allowedMentions: {
                                repliedUser: true
                            }
                        });
                    }
                } else {
                    if (!s4d.database.has(String((String(xp) + '-xp')))) {
                        s4d.database.set(String((String(xp) + '-xp')), '0');
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('level_emoji'))) + '** | XP**')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String(([(((s4dmessage.guild).members.cache.get(xp) || await (s4dmessage.guild).members.fetch(xp)).user).username, ' a atteint les `', s4d.database.get(String((String(xp) + '-xp'))), '/500`XP !'].join(''))))
                            ],
                            allowedMentions: {
                                repliedUser: true
                            }
                        });
                    } else {
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('level_emoji'))) + '** | XP**')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String(([(((s4dmessage.guild).members.cache.get(xp) || await (s4dmessage.guild).members.fetch(xp)).user).username, ' a atteint les `', s4d.database.get(String((String(xp) + '-xp'))), '/500`XP !'].join(''))))
                            ],
                            allowedMentions: {
                                repliedUser: true
                            }
                        });
                    }
                }
            }
        }
        if ((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'level') {
            if (s4d.database.get(String('level_config')) == 'on') {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('level_emoji'))) + '** | Niveau**')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String((['Vous avez atteint le niveau `', s4d.database.get(String((String((s4dmessage.author).id) + '-level'))), '` !'].join(''))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                });
            }
        }
        if (((s4dmessage.content) || '').startsWith((String(s4d.database.get(String('prefix'))) + 'level') || '')) {
            if (s4d.database.get(String('level_config')) == 'on') {
                level_args = (s4dmessage.content).split(' ');
                level = level_args.splice(1, 1)[0];
                if ((level || '').startsWith('<@' || '')) {
                    if (!s4d.database.has(String((String((s4dmessage.mentions.members.first().user).id) + '-level')))) {
                        s4d.database.set(String((String((s4dmessage.mentions.members.first().user).id) + '-level')), '0');
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('level_emoji'))) + '** | Niveau**')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String(([(s4dmessage.mentions.members.first().user).username, ' a atteint le niveau `', s4d.database.get(String((String((s4dmessage.mentions.members.first().user).id) + '-level'))), '` !'].join(''))))
                            ],
                            allowedMentions: {
                                repliedUser: true
                            }
                        });
                    } else {
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('level_emoji'))) + '** | Niveau**')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String(([(s4dmessage.mentions.members.first().user).username, ' a atteint le niveau `', s4d.database.get(String((String((s4dmessage.mentions.members.first().user).id) + '-level'))), '` !'].join(''))))
                            ],
                            allowedMentions: {
                                repliedUser: true
                            }
                        });
                    }
                } else {
                    if (!s4d.database.has(String((String(level) + '-level')))) {
                        s4d.database.set(String((String(level) + '-level')), '0');
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('level_emoji'))) + '** | Niveau**')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String(([(((s4dmessage.guild).members.cache.get(level) || await (s4dmessage.guild).members.fetch(level)).user).username, ' a atteint le niveau `', s4d.database.get(String((String(level) + '-level'))), '` !'].join(''))))
                            ],
                            allowedMentions: {
                                repliedUser: true
                            }
                        });
                    } else {
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('level_emoji'))) + '** | Niveau**')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String(([(((s4dmessage.guild).members.cache.get(level) || await (s4dmessage.guild).members.fetch(level)).user).username, ' a atteint le niveau `', s4d.database.get(String((String(level) + '-level'))), '` !'].join(''))))
                            ],
                            allowedMentions: {
                                repliedUser: true
                            }
                        });
                    }
                }
            }
        }

    });

    s4d.client.on('messageDelete', async (s4dmessage) => {
        s4d.client.channels.cache.get(s4d.database.get(String('logs_bot'))).send({
            embeds: [new MessageEmbed()
                .setTitle(String((String(s4d.database.get(String('delete_emoji'))) + '** | Message supprimé**')))
                .setColor(String(s4d.database.get(String('embed_color'))))
                .setDescription(String((['**<a:bot_loupe:986674310913617920> | Salon:** `#', (s4dmessage.channel).name, ' | ', (s4dmessage.channel).id, ' | ', (s4dmessage.channel).parentId, '`', '\n', '\n', '**<:bot_edit:986666388494114866> | Contenu:** ', '\n', '\n', s4dmessage.content, '\n', '\n', '**<:bot_community:986667100343001109> | Utilisateur:** ```', (s4dmessage.member.user).id, '```'].join(''))))
            ]
        });

    });

    // Compteurs
    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'member_count') {
            s4dmessage.reply({
                embeds: [new MessageEmbed()
                    .setTitle(String((String(s4d.database.get(String('infos_emoji'))) + '** | Nombre de membres**')))
                    .setColor(String(s4d.database.get(String('embed_color'))))
                    .setDescription(String((['Le serveur possède `', (s4dmessage.guild).members.cache.filter(m => !m.user.bot).size, '` membre(s) !'].join(''))))
                ],
                allowedMentions: {
                    repliedUser: true
                }
            });
        }
        if ((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'bot_count') {
            s4dmessage.reply({
                embeds: [new MessageEmbed()
                    .setTitle(String((String(s4d.database.get(String('infos_emoji'))) + '** | Nombre de bots**')))
                    .setColor(String(s4d.database.get(String('embed_color'))))
                    .setDescription(String((['Le serveur possède `', (s4dmessage.guild).members.cache.filter(m => m.user.bot).size, '` bot(s) !'].join(''))))
                ],
                allowedMentions: {
                    repliedUser: true
                }
            });
        }
        if ((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'chanel_count') {
            s4dmessage.reply({
                embeds: [new MessageEmbed()
                    .setTitle(String((String(s4d.database.get(String('infos_emoji'))) + '** | Nombre de salons**')))
                    .setColor(String(s4d.database.get(String('embed_color'))))
                    .setDescription(String((['Le serveur possède `', (s4dmessage.guild).channels.cache.size, '` salon(s) !'].join(''))))
                ],
                allowedMentions: {
                    repliedUser: true
                }
            });
        }
        if ((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'pub_count') {
            s4dmessage.reply({
                embeds: [new MessageEmbed()
                    .setTitle(String((String(s4d.database.get(String('infos_emoji'))) + '** | Nombre de publicités**')))
                    .setColor(String(s4d.database.get(String('embed_color'))))
                    .setDescription(String((['Le serveur possède `', s4d.database.get(String('total_pub')), '` publicité(s) !'].join(''))))
                ],
                allowedMentions: {
                    repliedUser: true
                }
            });
        }
        if ((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'ping') {
            s4dmessage.reply({
                embeds: [new MessageEmbed()
                    .setTitle(String((String(s4d.database.get(String('infos_emoji'))) + '** | Ping**')))
                    .setColor(String(s4d.database.get(String('embed_color'))))
                    .setDescription(String((['Mon ping est de `', s4d.client.ws.ping, '` ms !'].join(''))))
                ],
                allowedMentions: {
                    repliedUser: true
                }
            });
        }

    });

    // Embed Système
    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'embed') {
            if ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.get('908517630871207966')).id)) {
                (s4dmessage.channel).send({
                    embeds: [new MessageEmbed()
                        .setTitle(String((['<:bot_bot:986666343942213683> __**| Système d\'embed par `Business Bot**__', '', ''].join(''))))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String((['Configurez votre embed à l\'aide des différents boutons.', '', '', '', '', '', '', ''].join(''))))
                    ],
                    components: [(new MessageActionRow()
                        .addComponents(new MessageButton()
                            .setCustomId('desc_embed')
                            .setLabel('Description')
                            .setEmoji('<:bot_files:986666375131058178>')
                            .setStyle(('SECONDARY')),
                            new MessageButton()
                            .setCustomId('title_embed')
                            .setLabel('Titre')
                            .setEmoji('<:bot_edit:986666388494114866>')
                            .setStyle(('SECONDARY')),
                            new MessageButton()
                            .setCustomId('color_embed')
                            .setLabel('Couleur')
                            .setEmoji('<:bot_captcha:986666362271322112>')
                            .setStyle(('PRIMARY')),
                            new MessageButton()
                            .setCustomId('good_embed')
                            .setEmoji('<a:bot_good:986673556777734206>')
                            .setStyle(('SUCCESS')),
                            new MessageButton()
                            .setCustomId('notgood_embed')
                            .setEmoji('<a:bot_notgood:986673549773266954>')
                            .setStyle(('DANGER')),
                        ))]
                }).then(m => {
                    let collector = m.createMessageComponentCollector({
                        filter: i => i.user.id === (s4dmessage.member).id,
                        time: 60000
                    });
                    collector.on('collect', async i => {
                        if ((i.customId) == 'notgood_embed') {
                            await i.update({
                                content: String('**Menu Expiré**'),
                                components: [(new MessageActionRow()
                                    .addComponents(new MessageButton()
                                        .setCustomId('desc_embed')
                                        .setLabel('Description')
                                        .setEmoji('<:bot_files:986666375131058178>')
                                        .setStyle(('SECONDARY')),
                                        new MessageButton()
                                        .setCustomId('title_embed')
                                        .setLabel('Titre')
                                        .setEmoji('<:bot_edit:986666388494114866>')
                                        .setStyle(('SECONDARY')),
                                        new MessageButton()
                                        .setCustomId('color_embed')
                                        .setLabel('Couleur')
                                        .setEmoji('<:bot_captcha:986666362271322112>')
                                        .setStyle(('PRIMARY')),
                                        new MessageButton()
                                        .setCustomId('good_embed')
                                        .setEmoji('<a:bot_good:986673556777734206>')
                                        .setStyle(('SUCCESS')),
                                        new MessageButton()
                                        .setCustomId('notgood_embed')
                                        .setEmoji('<a:bot_notgood:986673549773266954>')
                                        .setStyle(('DANGER')),
                                    ))]
                            }).then(m => {

                            });
                            await i.deleteReply()
                        }
                        if ((i.customId) == 'good_embed') {
                            (s4dmessage.channel).send({
                                embeds: [new MessageEmbed()
                                    .setTitle(String(s4d.database.get(String((String((s4dmessage.author).id) + 'title_embed')))))
                                    .setColor(String(s4d.database.get(String((String((s4dmessage.author).id) + 'color-choice_embed')))))
                                    .setDescription(String(s4d.database.get(String((String((s4dmessage.author).id) + 'desc_embed')))))
                                ]
                            });
                            await i.update({
                                content: String('**Menu Expiré**'),
                                components: [(new MessageActionRow()
                                    .addComponents(new MessageButton()
                                        .setCustomId('desc_embed')
                                        .setLabel('Description')
                                        .setEmoji('<:bot_files:986666375131058178>')
                                        .setStyle(('SECONDARY')),
                                        new MessageButton()
                                        .setCustomId('title_embed')
                                        .setLabel('Titre')
                                        .setEmoji('<:bot_edit:986666388494114866>')
                                        .setStyle(('SECONDARY')),
                                        new MessageButton()
                                        .setCustomId('color_embed')
                                        .setLabel('Couleur')
                                        .setEmoji('<:bot_captcha:986666362271322112>')
                                        .setStyle(('PRIMARY')),
                                        new MessageButton()
                                        .setCustomId('good_embed')
                                        .setEmoji('<a:bot_good:986673556777734206>')
                                        .setStyle(('SUCCESS')),
                                        new MessageButton()
                                        .setCustomId('notgood_embed')
                                        .setEmoji('<a:bot_notgood:986673549773266954>')
                                        .setStyle(('DANGER')),
                                    ))]
                            }).then(m => {

                            });
                            await i.deleteReply()
                        }
                        if ((i.customId) == 'color_embed') {
                            (s4dmessage.channel).send({
                                embeds: [new MessageEmbed()
                                    .setTitle(String(('<:bot_bot:986666343942213683> __**| Système d\'embed par `Business Bot' + '')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String('Choisissez parmi les couleurs ci-desous, la couleur de l\'embed.'))
                                ],
                                components: [(new MessageActionRow()
                                    .addComponents(new MessageButton()
                                        .setCustomId('grey_embed')
                                        .setLabel(' ')
                                        .setStyle(('SECONDARY')),
                                        new MessageButton()
                                        .setCustomId('green_embed')
                                        .setLabel(' ')
                                        .setStyle(('SUCCESS')),
                                        new MessageButton()
                                        .setCustomId('blue_embed')
                                        .setLabel(' ')
                                        .setStyle(('PRIMARY')),
                                        new MessageButton()
                                        .setCustomId('red_embed')
                                        .setLabel(' ')
                                        .setStyle(('DANGER')),
                                    ))]
                            }).then(m => {
                                let collector = m.createMessageComponentCollector({
                                    filter: i => i.user.id === (s4dmessage.member).id,
                                    time: 60000
                                });
                                collector.on('collect', async i => {
                                    if ((i.customId) == 'grey_embed') {
                                        s4d.database.set(String((String((s4dmessage.author).id) + 'color-choice_embed')), '#52575f');
                                    }
                                    if ((i.customId) == 'green_embed') {
                                        s4d.database.set(String((String((s4dmessage.author).id) + 'color-choice_embed')), '#2d7d46');
                                    }
                                    if ((i.customId) == 'blue_embed') {
                                        s4d.database.set(String((String((s4dmessage.author).id) + 'color-choice_embed')), '#5865f2');
                                    }
                                    if ((i.customId) == 'red_embed') {
                                        s4d.database.set(String((String((s4dmessage.author).id) + 'color-choice_embed')), '#d83c3e');
                                    }
                                    await i.update({
                                        content: String('**Menu Expiré**'),
                                        components: [(new MessageActionRow()
                                            .addComponents(new MessageButton()
                                                .setCustomId('grey_embed')
                                                .setLabel(' ')
                                                .setStyle(('SECONDARY')),
                                                new MessageButton()
                                                .setCustomId('green_embed')
                                                .setLabel(' ')
                                                .setStyle(('SUCCESS')),
                                                new MessageButton()
                                                .setCustomId('blue_embed')
                                                .setLabel(' ')
                                                .setStyle(('PRIMARY')),
                                                new MessageButton()
                                                .setCustomId('red_embed')
                                                .setLabel(' ')
                                                .setStyle(('DANGER')),
                                            ))]
                                    }).then(m => {

                                    });
                                    await i.deleteReply()

                                })

                            });
                        }
                        if ((i.customId) == 'title_embed') {
                            (s4dmessage.channel).send(String((['<:bot_community:986667100343001109> | Veuillez entrer le titre de l\'embed.', '\n', '*Entrez `cancel` pour annuler.*'].join('')))).then(() => {
                                (s4dmessage.channel).awaitMessages({
                                    filter: (m) => m.author.id === (s4dmessage.member).id,
                                    time: (20 * 60 * 1000),
                                    max: 1
                                }).then(async (collected) => {
                                    s4d.reply = collected.first().content;
                                    s4d.message = collected.first();
                                    if (!((s4d.reply) == 'cancel')) {
                                        s4d.database.set(String((String((s4dmessage.author).id) + 'title_embed')), (s4d.reply));
                                        (s4dmessage.channel).send({
                                            embeds: [new MessageEmbed()
                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + ' __**| Modifications sauvegardées**__')))
                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                .setDescription(String('Toutes les modifications ont bien été enregistrées !'))
                                            ]
                                        });
                                        await delay(Number(1) * 1000);
                                        (s4dmessage.channel).bulkDelete((2 | 1));
                                    } else {
                                        (s4dmessage.channel).send({
                                            embeds: [new MessageEmbed()
                                                .setTitle(String((String(s4d.database.get(String('delete_emoji'))) + ' __**| Modifications supprimées**__')))
                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                .setDescription(String('Toutes les modifications ont bien été supprimées !'))
                                            ]
                                        });
                                        (s4dmessage.channel).bulkDelete((2 | 1));
                                    }

                                    s4d.reply = null;
                                }).catch(async (e) => {
                                    console.error(e);
                                });
                            })
                        }
                        if ((i.customId) == 'desc_embed') {
                            (s4dmessage.channel).send(String((['<:bot_community:986667100343001109> | Veuillez entrer la description de l\'embed.', '\n', '*Entrez `cancel` pour annuler.*'].join('')))).then(() => {
                                (s4dmessage.channel).awaitMessages({
                                    filter: (m) => m.author.id === (s4dmessage.member).id,
                                    time: (20 * 60 * 1000),
                                    max: 1
                                }).then(async (collected) => {
                                    s4d.reply = collected.first().content;
                                    s4d.message = collected.first();
                                    if (!((s4d.reply) == 'cancel')) {
                                        s4d.database.set(String((String((s4dmessage.author).id) + 'desc_embed')), (s4d.reply));
                                        (s4dmessage.channel).send({
                                            embeds: [new MessageEmbed()
                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + ' __**| Modifications sauvegardées**__')))
                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                .setDescription(String('Toutes les modifications ont bien été enregistrées !'))
                                            ]
                                        });
                                        await delay(Number(1) * 1000);
                                        (s4dmessage.channel).bulkDelete((2 | 1));
                                    } else {
                                        (s4dmessage.channel).send({
                                            embeds: [new MessageEmbed()
                                                .setTitle(String((String(s4d.database.get(String('delete_emoji'))) + ' __**| Modifications supprimées**__')))
                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                .setDescription(String('Toutes les modifications ont bien été supprimées !'))
                                            ]
                                        });
                                        (s4dmessage.channel).bulkDelete((2 | 1));
                                    }

                                    s4d.reply = null;
                                }).catch(async (e) => {
                                    console.error(e);
                                });
                            })
                        }

                    })

                });
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + ' **| Une erreur est survenue !**')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String('Pour poursuivre, vous devez posséder le rôle *<@&790517358548484158>*.'))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(3) * 1000);
                    s4dfrost_real_reply.delete();
                    s4dmessage.delete();

                });
            }
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if (((s4dmessage.content) || '').startsWith((String(s4d.database.get(String('prefix'))) + 'sperso') || '')) {
            if (!((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'sperso')) {
                if ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.get('790517358548484158')).id)) {
                    sperso_resp = (s4dmessage.content).split(' ');
                    sperso_resp2 = sperso_resp.splice(1, 1)[0];
                    s4d.database.set(String(('' + 'resp-id')), sperso_resp2);
                    s4d.database.set(String(((s4dmessage.author).id)), s4d.database.get(String('resp-id')));
                    (s4dmessage.channel).send({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('settings_emoji'))) + ' | Création de salon personnalisé')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String('Configurez le nouveau salon personnalisé à l\'aide des boutons.'))
                        ],
                        components: [(new MessageActionRow()
                            .addComponents(
                                new MessageSelectMenu()
                                .setCustomId('s_perso')
                                .setPlaceholder('Menu de configuration')
                                .setMaxValues(1)
                                .setMinValues(1)
                                .setDisabled(false)


                                .addOptions({
                                    value: 'name_sp',
                                    label: 'Nom du salon',
                                    emoji: '<:bot_files:986666375131058178>',
                                    description: 'Configurer le nom du salon.',
                                    default: false,
                                }, {
                                    value: 'time_sp',
                                    label: 'Temps du salon',
                                    emoji: '<:bot_timedout:986666367656788038>',
                                    description: 'Configurer le temps du salon.',
                                    default: false,
                                }, {
                                    value: 'ping_sp',
                                    label: 'Mention',
                                    emoji: '<:bot_muted:986666385763627078>',
                                    description: 'Configurer la mention du salon.',
                                    default: false,
                                }, {
                                    value: 'reason_sp',
                                    label: 'Raison du salon',
                                    emoji: '<:bot_edit:986666388494114866>',
                                    description: 'Configurer la raison du salon.',
                                    default: false,
                                }, {
                                    value: 'pub_sp',
                                    label: 'Publicité du serveur',
                                    emoji: '<:bot_captcha:986666362271322112>',
                                    description: 'Configurer la publicité du salon.',
                                    default: false,
                                }, {
                                    value: 'ok',
                                    label: 'Terminer',
                                    emoji: '<a:bot_good:986673556777734206>',
                                    description: 'Continuer la configuration.',
                                    default: false,
                                }, ))
                        )]
                    }).then(m => {
                        let collector = m.createMessageComponentCollector({
                            filter: i => i.user.id === (s4dmessage.member).id,
                            time: 60000
                        });
                        collector.on('collect', async i => {
                            if ((i.customId) == 's_perso' && (i.values[0]) == 'name_sp') {
                                (s4dmessage.channel).send(String(([s4d.database.get(String('question_emoji')), '**| Quel est le nom du salon personnalisé ?**', '\n', '*Entrez `cancel` pour annuler.*'].join('')))).then(() => {
                                    (s4dmessage.channel).awaitMessages({
                                        filter: (m) => m.author.id === (s4dmessage.author).id,
                                        time: (15 * 60 * 1000),
                                        max: 1
                                    }).then(async (collected) => {
                                        s4d.reply = collected.first().content;
                                        s4d.message = collected.first();
                                        if (!((s4d.reply) == 'cancel')) {
                                            s4d.database.set(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-name')), (s4d.reply));
                                            (s4dmessage.channel).send({
                                                embeds: [new MessageEmbed()
                                                    .setTitle(String((String(s4d.database.get(String('good_emoji'))) + ' | Tout est bon !')))
                                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                                    .setDescription(String('Votre choix a bien été sauvegardé !'))
                                                ]
                                            });
                                            await delay(Number(2) * 1000);
                                            (s4dmessage.channel).bulkDelete((3 | 1));
                                        }

                                        s4d.reply = null;
                                    }).catch(async (e) => {
                                        console.error(e);
                                    });
                                })
                            }
                            if ((i.customId) == 's_perso' && (i.values[0]) == 'pub_sp') {
                                (s4dmessage.channel).send(String(([s4d.database.get(String('question_emoji')), '**| Quelle est la publicité du serveur en question ?**', '\n', '*Entrez `cancel` pour annuler.*'].join('')))).then(() => {
                                    (s4dmessage.channel).awaitMessages({
                                        filter: (m) => m.author.id === (s4dmessage.author).id,
                                        time: (15 * 60 * 1000),
                                        max: 1
                                    }).then(async (collected) => {
                                        s4d.reply = collected.first().content;
                                        s4d.message = collected.first();
                                        if (!((s4d.reply) == 'cancel')) {
                                            s4d.database.set(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-pub')), (s4d.reply));
                                            (s4dmessage.channel).send({
                                                embeds: [new MessageEmbed()
                                                    .setTitle(String((String(s4d.database.get(String('good_emoji'))) + ' | Tout est bon !')))
                                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                                    .setDescription(String('Votre choix a bien été sauvegardé !'))
                                                ]
                                            });
                                            await delay(Number(2) * 1000);
                                            (s4dmessage.channel).bulkDelete((3 | 1));
                                        }

                                        s4d.reply = null;
                                    }).catch(async (e) => {
                                        console.error(e);
                                    });
                                })
                            }
                            if ((i.customId) == 's_perso' && (i.values[0]) == 'reason_sp') {
                                (s4dmessage.channel).send({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String('<:1_perso_emoji_chanel:925368816706396210> | Raison du salon'))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String('Sélectionnez la raison du salon personnalisé.'))
                                    ],
                                    components: [(new MessageActionRow()
                                        .addComponents(
                                            new MessageSelectMenu()
                                            .setCustomId('reason-1')
                                            .setPlaceholder('Menu déroulant')
                                            .setMaxValues(1)
                                            .setMinValues(1)
                                            .setDisabled(false)


                                            .addOptions({
                                                value: 'buy',
                                                label: 'Achat Boutique',
                                                emoji: '<:business_perso_emoji_boutique:925802618859687977>',
                                                description: 'Le salon personnalisé à été acheté via la boutique.',
                                                default: false,
                                            }, {
                                                value: 'giveaway',
                                                label: 'Giveaway Gagné',
                                                emoji: '<:1_perso_emoji_reward:925423898152022037>',
                                                description: 'Un salon personnalisé a été gagné dans un giveaway.',
                                                default: false,
                                            }, {
                                                value: 'other',
                                                label: 'Autre',
                                                emoji: '<:business_perso_emoji_news:925359761300533258>',
                                                description: 'Le salon personnalisé a été obtenu pour une raison non définie.',
                                                default: false,
                                            }, ))
                                    )]
                                }).then(m => {
                                    let collector = m.createMessageComponentCollector({
                                        filter: i => i.user.id === (s4dmessage.member).id,
                                        time: 60000
                                    });
                                    collector.on('collect', async i => {
                                        if ((i.customId) == 'reason-1' && (i.values[0]) == 'other') {
                                            s4d.database.set(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-reason')), '*Autre/Non précisé*');
                                            (s4dmessage.channel).send({
                                                embeds: [new MessageEmbed()
                                                    .setTitle(String((String(s4d.database.get(String('good_emoji'))) + ' | Tout est bon !')))
                                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                                    .setDescription(String('Votre choix a bien été sauvegardé !'))
                                                ]
                                            });
                                            await delay(Number(2) * 1000);
                                            (s4dmessage.channel).bulkDelete((1 | 1));
                                            await i.update({
                                                content: String('**Menu Expiré**'),
                                                components: [(new MessageActionRow()
                                                    .addComponents(
                                                        new MessageSelectMenu()
                                                        .setCustomId('reason-1')
                                                        .setPlaceholder('Menu déroulant')
                                                        .setMaxValues(1)
                                                        .setMinValues(1)
                                                        .setDisabled(false)


                                                        .addOptions({
                                                            value: 'buy',
                                                            label: 'Achat Boutique',
                                                            emoji: '<:business_perso_emoji_boutique:925802618859687977>',
                                                            description: 'Le salon personnalisé à été acheté via la boutique.',
                                                            default: false,
                                                        }, {
                                                            value: 'giveaway',
                                                            label: 'Giveaway Gagné',
                                                            emoji: '<:1_perso_emoji_reward:925423898152022037>',
                                                            description: 'Un salon personnalisé a été gagné dans un giveaway.',
                                                            default: false,
                                                        }, {
                                                            value: 'other',
                                                            label: 'Autre',
                                                            emoji: '<:business_perso_emoji_news:925359761300533258>',
                                                            description: 'Le salon personnalisé a été obtenu pour une raison non définie.',
                                                            default: false,
                                                        }, ))
                                                )]
                                            }).then(m => {

                                            });
                                            await i.deleteReply()
                                        }
                                        if ((i.customId) == 'reason-1' && (i.values[0]) == 'giveaway') {
                                            s4d.database.set(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-reason')), '*Récompense Giveaway*');
                                            (s4dmessage.channel).send({
                                                embeds: [new MessageEmbed()
                                                    .setTitle(String((String(s4d.database.get(String('good_emoji'))) + ' | Tout est bon !')))
                                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                                    .setDescription(String('Votre choix a bien été sauvegardé !'))
                                                ]
                                            });
                                            await delay(Number(2) * 1000);
                                            (s4dmessage.channel).bulkDelete((1 | 1));
                                            await i.update({
                                                content: String('**Menu Expiré**'),
                                                components: [(new MessageActionRow()
                                                    .addComponents(
                                                        new MessageSelectMenu()
                                                        .setCustomId('reason-1')
                                                        .setPlaceholder('Menu déroulant')
                                                        .setMaxValues(1)
                                                        .setMinValues(1)
                                                        .setDisabled(false)


                                                        .addOptions({
                                                            value: 'buy',
                                                            label: 'Achat Boutique',
                                                            emoji: '<:business_perso_emoji_boutique:925802618859687977>',
                                                            description: 'Le salon personnalisé à été acheté via la boutique.',
                                                            default: false,
                                                        }, {
                                                            value: 'giveaway',
                                                            label: 'Giveaway Gagné',
                                                            emoji: '<:1_perso_emoji_reward:925423898152022037>',
                                                            description: 'Un salon personnalisé a été gagné dans un giveaway.',
                                                            default: false,
                                                        }, {
                                                            value: 'other',
                                                            label: 'Autre',
                                                            emoji: '<:business_perso_emoji_news:925359761300533258>',
                                                            description: 'Le salon personnalisé a été obtenu pour une raison non définie.',
                                                            default: false,
                                                        }, ))
                                                )]
                                            }).then(m => {

                                            });
                                            await i.deleteReply()
                                        }
                                        if ((i.customId) == 'reason-1' && (i.values[0]) == 'buy') {
                                            s4d.database.set(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-reason')), '*Achat Boutique*');
                                            (s4dmessage.channel).send({
                                                embeds: [new MessageEmbed()
                                                    .setTitle(String((String(s4d.database.get(String('good_emoji'))) + ' | Tout est bon !')))
                                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                                    .setDescription(String('Votre choix a bien été sauvegardé !'))
                                                ]
                                            });
                                            await delay(Number(2) * 1000);
                                            (s4dmessage.channel).bulkDelete((1 | 1));
                                            await i.update({
                                                content: String('**Menu Expiré**'),
                                                components: [(new MessageActionRow()
                                                    .addComponents(
                                                        new MessageSelectMenu()
                                                        .setCustomId('reason-1')
                                                        .setPlaceholder('Menu déroulant')
                                                        .setMaxValues(1)
                                                        .setMinValues(1)
                                                        .setDisabled(false)


                                                        .addOptions({
                                                            value: 'buy',
                                                            label: 'Achat Boutique',
                                                            emoji: '<:business_perso_emoji_boutique:925802618859687977>',
                                                            description: 'Le salon personnalisé à été acheté via la boutique.',
                                                            default: false,
                                                        }, {
                                                            value: 'giveaway',
                                                            label: 'Giveaway Gagné',
                                                            emoji: '<:1_perso_emoji_reward:925423898152022037>',
                                                            description: 'Un salon personnalisé a été gagné dans un giveaway.',
                                                            default: false,
                                                        }, {
                                                            value: 'other',
                                                            label: 'Autre',
                                                            emoji: '<:business_perso_emoji_news:925359761300533258>',
                                                            description: 'Le salon personnalisé a été obtenu pour une raison non définie.',
                                                            default: false,
                                                        }, ))
                                                )]
                                            }).then(m => {

                                            });
                                            await i.deleteReply()
                                        }

                                    })

                                });
                            }
                            if ((i.customId) == 's_perso' && (i.values[0]) == 'ping_sp') {
                                (s4dmessage.channel).send({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String('<:business_perso_emoji_ping:925431173247807528> | Mention du salon'))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String('Veuillez sélectionner via le menu la mention achetée .'))
                                    ],
                                    components: [(new MessageActionRow()
                                        .addComponents(
                                            new MessageSelectMenu()
                                            .setCustomId('ping-1')
                                            .setPlaceholder('Menu déroulant')
                                            .setMaxValues(1)
                                            .setMinValues(1)
                                            .setDisabled(false)


                                            .addOptions({
                                                value: 'everyone',
                                                label: '@everyone',
                                                emoji: '<:bot_community:986667100343001109>',
                                                default: false,
                                            }, {
                                                value: 'here',
                                                label: '@here',
                                                emoji: '<:bot_link:986666351139651654>',
                                                default: false,
                                            }, {
                                                value: 'notif_autres',
                                                label: '@🔔┊Notifications Autre',
                                                emoji: '<:bot_premium:986666391803428894>',
                                                default: false,
                                            }, {
                                                value: 'aucune_sp',
                                                label: 'Aucune',
                                                emoji: '<:bot_muted:986666385763627078>',
                                                default: false,
                                            }, ))
                                    )]
                                }).then(m => {
                                    let collector = m.createMessageComponentCollector({
                                        filter: i => i.user.id === (s4dmessage.member).id,
                                        time: 60000
                                    });
                                    collector.on('collect', async i => {
                                        if ((i.customId) == 'ping-1' && (i.values[0]) == 'aucune_sp') {
                                            s4d.database.set(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-ping')), '`Aucune`');
                                            (s4dmessage.channel).send({
                                                embeds: [new MessageEmbed()
                                                    .setTitle(String((String(s4d.database.get(String('good_emoji'))) + ' | Tout est bon !')))
                                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                                    .setDescription(String('Votre choix a bien été sauvegardé !'))
                                                ]
                                            });
                                            await delay(Number(2) * 1000);
                                            (s4dmessage.channel).bulkDelete((1 | 1));
                                            await i.update({
                                                content: String('**Menu Expiré**'),
                                                components: [(new MessageActionRow()
                                                    .addComponents(
                                                        new MessageSelectMenu()
                                                        .setCustomId('ping-1')
                                                        .setPlaceholder('Menu déroulant')
                                                        .setMaxValues(1)
                                                        .setMinValues(1)
                                                        .setDisabled(false)


                                                        .addOptions({
                                                            value: 'everyone',
                                                            label: '@everyone',
                                                            emoji: '<:business_perso_emoji_role:926081749556019232>',
                                                            default: false,
                                                        }, {
                                                            value: 'here',
                                                            label: '@here',
                                                            emoji: '<:business_perso_emoji_role:926081749556019232>',
                                                            default: false,
                                                        }, {
                                                            value: 'notif_autres',
                                                            label: '@🔔┊Notifications Autre',
                                                            emoji: '<:business_perso_emoji_role:926081749556019232>',
                                                            default: false,
                                                        }, ))
                                                )]
                                            }).then(m => {

                                            });
                                            await i.deleteReply()
                                        }
                                        if ((i.customId) == 'ping-1' && (i.values[0]) == 'notif_autres') {
                                            s4d.database.set(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-ping')), '<@&790517373374824489>');
                                            (s4dmessage.channel).send({
                                                embeds: [new MessageEmbed()
                                                    .setTitle(String((String(s4d.database.get(String('good_emoji'))) + ' | Tout est bon !')))
                                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                                    .setDescription(String('Votre choix a bien été sauvegardé !'))
                                                ]
                                            });
                                            await delay(Number(2) * 1000);
                                            (s4dmessage.channel).bulkDelete((1 | 1));
                                            await i.update({
                                                content: String('**Menu Expiré**'),
                                                components: [(new MessageActionRow()
                                                    .addComponents(
                                                        new MessageSelectMenu()
                                                        .setCustomId('ping-1')
                                                        .setPlaceholder('Menu déroulant')
                                                        .setMaxValues(1)
                                                        .setMinValues(1)
                                                        .setDisabled(false)


                                                        .addOptions({
                                                            value: 'everyone',
                                                            label: '@everyone',
                                                            emoji: '<:business_perso_emoji_role:926081749556019232>',
                                                            default: false,
                                                        }, {
                                                            value: 'here',
                                                            label: '@here',
                                                            emoji: '<:business_perso_emoji_role:926081749556019232>',
                                                            default: false,
                                                        }, {
                                                            value: 'notif_autres',
                                                            label: '@🔔┊Notifications Autre',
                                                            emoji: '<:business_perso_emoji_role:926081749556019232>',
                                                            default: false,
                                                        }, ))
                                                )]
                                            }).then(m => {

                                            });
                                            await i.deleteReply()
                                        }
                                        if ((i.customId) == 'ping-1' && (i.values[0]) == 'here') {
                                            s4d.database.set(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-ping')), '@here');
                                            (s4dmessage.channel).send({
                                                embeds: [new MessageEmbed()
                                                    .setTitle(String((String(s4d.database.get(String('good_emoji'))) + ' | Tout est bon !')))
                                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                                    .setDescription(String('Votre choix a bien été sauvegardé !'))
                                                ]
                                            });
                                            await delay(Number(2) * 1000);
                                            (s4dmessage.channel).bulkDelete((1 | 1));
                                            await i.update({
                                                content: String('**Menu Expiré**'),
                                                components: [(new MessageActionRow()
                                                    .addComponents(
                                                        new MessageSelectMenu()
                                                        .setCustomId('ping-1')
                                                        .setPlaceholder('Menu déroulant')
                                                        .setMaxValues(1)
                                                        .setMinValues(1)
                                                        .setDisabled(false)


                                                        .addOptions({
                                                            value: 'everyone',
                                                            label: '@everyone',
                                                            emoji: '<:business_perso_emoji_role:926081749556019232>',
                                                            default: false,
                                                        }, {
                                                            value: 'here',
                                                            label: '@here',
                                                            emoji: '<:business_perso_emoji_role:926081749556019232>',
                                                            default: false,
                                                        }, {
                                                            value: 'notif_autres',
                                                            label: '@🔔┊Notifications Autre',
                                                            emoji: '<:business_perso_emoji_role:926081749556019232>',
                                                            default: false,
                                                        }, ))
                                                )]
                                            }).then(m => {

                                            });
                                            await i.deleteReply()
                                        }
                                        if ((i.customId) == 'ping-1' && (i.values[0]) == 'everyone') {
                                            s4d.database.set(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-ping')), '@everyone');
                                            (s4dmessage.channel).send({
                                                embeds: [new MessageEmbed()
                                                    .setTitle(String((String(s4d.database.get(String('good_emoji'))) + ' | Tout est bon !')))
                                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                                    .setDescription(String('Votre choix a bien été sauvegardé !'))
                                                ]
                                            });
                                            await delay(Number(2) * 1000);
                                            (s4dmessage.channel).bulkDelete((1 | 1));
                                            await i.update({
                                                content: String('**Menu Expiré**'),
                                                components: [(new MessageActionRow()
                                                    .addComponents(
                                                        new MessageSelectMenu()
                                                        .setCustomId('ping-1')
                                                        .setPlaceholder('Menu déroulant')
                                                        .setMaxValues(1)
                                                        .setMinValues(1)
                                                        .setDisabled(false)


                                                        .addOptions({
                                                            value: 'everyone',
                                                            label: '@everyone',
                                                            emoji: '<:business_perso_emoji_role:926081749556019232>',
                                                            default: false,
                                                        }, {
                                                            value: 'here',
                                                            label: '@here',
                                                            emoji: '<:business_perso_emoji_role:926081749556019232>',
                                                            default: false,
                                                        }, {
                                                            value: 'notif_autres',
                                                            label: '@🔔┊Notifications Autre',
                                                            emoji: '<:business_perso_emoji_role:926081749556019232>',
                                                            default: false,
                                                        }, ))
                                                )]
                                            }).then(m => {

                                            });
                                            await i.deleteReply()
                                        }

                                    })

                                });
                            }
                            if ((i.customId) == 's_perso' && (i.values[0]) == 'time_sp') {
                                (s4dmessage.channel).send({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String('🕰️ | Temps du salon'))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String('Veuillez sélectionner via le menu le temps du salon personnalisé.'))
                                    ],
                                    components: [(new MessageActionRow()
                                        .addComponents(
                                            new MessageSelectMenu()
                                            .setCustomId('time-1')
                                            .setPlaceholder('Menu déroulant')
                                            .setMaxValues(1)
                                            .setMinValues(1)
                                            .setDisabled(false)


                                            .addOptions({
                                                value: '3d',
                                                label: '3 Jours',
                                                emoji: '⏱️',
                                                default: false,
                                            }, {
                                                value: '7d',
                                                label: '7 Jours',
                                                emoji: '⏱️',
                                                default: false,
                                            }, {
                                                value: '14d',
                                                label: '14 Jours',
                                                emoji: '⏱️',
                                                default: false,
                                            }, {
                                                value: '1m',
                                                label: '1 Mois',
                                                emoji: '⏱️',
                                                default: false,
                                            }, ))
                                    )]
                                }).then(m => {
                                    let collector = m.createMessageComponentCollector({
                                        filter: i => i.user.id === (s4dmessage.member).id,
                                        time: 60000
                                    });
                                    collector.on('collect', async i => {
                                        if ((i.customId) == 'time-1' && (i.values[0]) == '1m') {
                                            s4d.database.set(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-time')), '1 Mois');
                                            s4d.database.set(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-date_create')), ((new Date().getDate())));
                                            (s4dmessage.channel).send({
                                                embeds: [new MessageEmbed()
                                                    .setTitle(String((String(s4d.database.get(String('good_emoji'))) + ' | Tout est bon !')))
                                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                                    .setDescription(String('Votre choix a bien été sauvegardé !'))
                                                ]
                                            });
                                            await delay(Number(2) * 1000);
                                            (s4dmessage.channel).bulkDelete((1 | 1));
                                            await i.update({
                                                content: String('**Menu Expiré**'),
                                                components: [(new MessageActionRow()
                                                    .addComponents(
                                                        new MessageSelectMenu()
                                                        .setCustomId('time-1')
                                                        .setPlaceholder('Menu déroulant')
                                                        .setMaxValues(1)
                                                        .setMinValues(1)
                                                        .setDisabled(false)


                                                        .addOptions({
                                                            value: '3d',
                                                            label: '3 Jours',
                                                            emoji: '⏱️',
                                                            default: false,
                                                        }, {
                                                            value: '7d',
                                                            label: '7 Jours',
                                                            emoji: '⏱️',
                                                            default: false,
                                                        }, {
                                                            value: '14d',
                                                            label: '14 Jours',
                                                            emoji: '⏱️',
                                                            default: false,
                                                        }, {
                                                            value: '1m',
                                                            label: '1 Mois',
                                                            emoji: '⏱️',
                                                            default: false,
                                                        }, ))
                                                )]
                                            }).then(m => {

                                            });
                                            await i.deleteReply()
                                        }
                                        if ((i.customId) == 'time-1' && (i.values[0]) == '14d') {
                                            s4d.database.set(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-time')), '14 Jours');
                                            s4d.database.set(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-date_create')), ((new Date().getDate())));
                                            (s4dmessage.channel).send({
                                                embeds: [new MessageEmbed()
                                                    .setTitle(String((String(s4d.database.get(String('good_emoji'))) + ' | Tout est bon !')))
                                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                                    .setDescription(String('Votre choix a bien été sauvegardé !'))
                                                ]
                                            });
                                            await delay(Number(2) * 1000);
                                            (s4dmessage.channel).bulkDelete((1 | 1));
                                            await i.update({
                                                content: String('**Menu Expiré**'),
                                                components: [(new MessageActionRow()
                                                    .addComponents(
                                                        new MessageSelectMenu()
                                                        .setCustomId('time-1')
                                                        .setPlaceholder('Menu déroulant')
                                                        .setMaxValues(1)
                                                        .setMinValues(1)
                                                        .setDisabled(false)


                                                        .addOptions({
                                                            value: '3d',
                                                            label: '3 Jours',
                                                            emoji: '⏱️',
                                                            default: false,
                                                        }, {
                                                            value: '7d',
                                                            label: '7 Jours',
                                                            emoji: '⏱️',
                                                            default: false,
                                                        }, {
                                                            value: '14d',
                                                            label: '14 Jours',
                                                            emoji: '⏱️',
                                                            default: false,
                                                        }, {
                                                            value: '1m',
                                                            label: '1 Mois',
                                                            emoji: '⏱️',
                                                            default: false,
                                                        }, ))
                                                )]
                                            }).then(m => {

                                            });
                                            await i.deleteReply()
                                        }
                                        if ((i.customId) == 'time-1' && (i.values[0]) == '7d') {
                                            s4d.database.set(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-time')), '7 Jours');
                                            s4d.database.set(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-date_create')), ((new Date().getDate())));
                                            (s4dmessage.channel).send({
                                                embeds: [new MessageEmbed()
                                                    .setTitle(String((String(s4d.database.get(String('good_emoji'))) + ' | Tout est bon !')))
                                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                                    .setDescription(String('Votre choix a bien été sauvegardé !'))
                                                ]
                                            });
                                            await delay(Number(2) * 1000);
                                            (s4dmessage.channel).bulkDelete((1 | 1));
                                            await i.update({
                                                content: String('**Menu Expiré**'),
                                                components: [(new MessageActionRow()
                                                    .addComponents(
                                                        new MessageSelectMenu()
                                                        .setCustomId('time-1')
                                                        .setPlaceholder('Menu déroulant')
                                                        .setMaxValues(1)
                                                        .setMinValues(1)
                                                        .setDisabled(false)


                                                        .addOptions({
                                                            value: '3d',
                                                            label: '3 Jours',
                                                            emoji: '⏱️',
                                                            default: false,
                                                        }, {
                                                            value: '7d',
                                                            label: '7 Jours',
                                                            emoji: '⏱️',
                                                            default: false,
                                                        }, {
                                                            value: '14d',
                                                            label: '14 Jours',
                                                            emoji: '⏱️',
                                                            default: false,
                                                        }, {
                                                            value: '1m',
                                                            label: '1 Mois',
                                                            emoji: '⏱️',
                                                            default: false,
                                                        }, ))
                                                )]
                                            }).then(m => {

                                            });
                                            await i.deleteReply()
                                        }
                                        if ((i.customId) == 'time-1' && (i.values[0]) == '3d') {
                                            s4d.database.set(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-time')), '3 Jours');
                                            s4d.database.set(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-date_create')), ((new Date().getDate())));
                                            (s4dmessage.channel).send({
                                                embeds: [new MessageEmbed()
                                                    .setTitle(String((String(s4d.database.get(String('good_emoji'))) + ' | Tout est bon !')))
                                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                                    .setDescription(String('Votre choix a bien été sauvegardé !'))
                                                ]
                                            });
                                            await delay(Number(2) * 1000);
                                            (s4dmessage.channel).bulkDelete((1 | 1));
                                            await i.update({
                                                content: String('**Menu Expiré**'),
                                                components: [(new MessageActionRow()
                                                    .addComponents(
                                                        new MessageSelectMenu()
                                                        .setCustomId('time-1')
                                                        .setPlaceholder('Menu déroulant')
                                                        .setMaxValues(1)
                                                        .setMinValues(1)
                                                        .setDisabled(false)


                                                        .addOptions({
                                                            value: '3d',
                                                            label: '3 Jours',
                                                            emoji: '⏱️',
                                                            default: false,
                                                        }, {
                                                            value: '7d',
                                                            label: '7 Jours',
                                                            emoji: '⏱️',
                                                            default: false,
                                                        }, {
                                                            value: '14d',
                                                            label: '14 Jours',
                                                            emoji: '⏱️',
                                                            default: false,
                                                        }, {
                                                            value: '1m',
                                                            label: '1 Mois',
                                                            emoji: '⏱️',
                                                            default: false,
                                                        }, ))
                                                )]
                                            }).then(m => {

                                            });
                                            await i.deleteReply()
                                        }

                                    })

                                });
                            }
                            if ((i.customId) == 's_perso' && (i.values[0]) == 'ok') {
                                if (s4d.database.has(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-time'))) && s4d.database.has(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-ping'))) && s4d.database.has(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-reason'))) && s4d.database.has(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-pub'))) && s4d.database.has(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-name')))) {
                                    (s4dmessage.channel).send({
                                        embeds: [new MessageEmbed()
                                            .setTitle(String((String(s4d.database.get(String('settings_emoji'))) + ' | Prévisualisation du salon personnalisé')))
                                            .setColor(String(s4d.database.get(String('embed_color'))))
                                            .setDescription(String((['> <:item_warn:884051646433329152>__** | Informations extérieurs:**__', '\n', '\n', '<:1_perso_emoji_chanel:925368816706396210> **| Nom du salon:** *', s4d.database.get(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-name'))), '*', '\n', '\n', '> <:business_perso_emoji_news:925359761300533258> **| Message:**', '\n', '\n', '*Pour avoir le même salon rendez-vous dans <#901894881608359967> !*', '\n', '\n', '> <:item_user:916648174532300830> **| Responsable du salon:** <@', s4d.database.get(String(((s4dmessage.author).id))), '>', '\n', '> <:business_perso_emoji_diary:925874517740486656> **|Temps du salon:** `', s4d.database.get(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-time'))), '`', '\n', '> <:business_perso_emoji_role:926081749556019232> **| Mention:** ', s4d.database.get(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-ping'))), '\n', '> <:1_perso_emoji_chanel:925368816706396210> **| Raison:** ', s4d.database.get(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-reason'))), '\n', '\n', '> <:business_perso_emoji_news:925359761300533258> **| Publicité:**', '\n', '\n', '\n', s4d.database.get(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-pub')))].join(''))))
                                        ],
                                        components: [(new MessageActionRow()
                                            .addComponents(new MessageButton()
                                                .setCustomId('go-1')
                                                .setLabel('Lancer')
                                                .setEmoji('')
                                                .setStyle(('SUCCESS')),
                                                new MessageButton()
                                                .setCustomId('stop-1')
                                                .setLabel('Annuler')
                                                .setEmoji('')
                                                .setStyle(('DANGER')),
                                            ))]
                                    }).then(m => {
                                        let collector = m.createMessageComponentCollector({
                                            filter: i => i.user.id === (s4dmessage.member).id,
                                            time: 60000
                                        });
                                        collector.on('collect', async i => {
                                            if ((i.customId) == 'go-1') {
                                                (s4dmessage.guild).channels.create(s4d.database.get(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-name'))), {
                                                    type: 'text',
                                                    parent: '829440340779860029'
                                                });
                                                await delay(Number(1) * 1000);
                                                s4d.client.channels.cache.get(s4d.database.get(String('id_chanel'))).send({
                                                    content: String((['', '', '', '', '', '', '', '', '', '', '', '*Pour avoir le même salon rendez-vous dans <#901894881608359967> !*', '\n', '\n', '> <:item_user:916648174532300830> **| Responsable du salon:** <@', s4d.database.get(String(((s4dmessage.author).id))), '>', '\n', '> <:business_perso_emoji_diary:925874517740486656> **|Temps du salon:** `', s4d.database.get(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-time'))), '`', '\n', '> <:business_perso_emoji_role:926081749556019232> **| Mention:** ', s4d.database.get(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-ping'))), '\n', '> <:1_perso_emoji_chanel:925368816706396210> **| Raison:** ', s4d.database.get(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-reason'))), '\n', '\n', '> <:business_perso_emoji_news:925359761300533258> **| Publicité:**', '\n', '\n', '\n', s4d.database.get(String((String(s4d.database.get(String(((s4dmessage.author).id)))) + '-pub')))].join('')))
                                                });
                                                (s4dmessage.channel).send({
                                                    embeds: [new MessageEmbed()
                                                        .setTitle(String((String(s4d.database.get(String('good_emoji'))) + ' | Configuration Terminée !')))
                                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                                        .setDescription(String('Le salon personnalisé a bien été crée !'))
                                                    ]
                                                });
                                            }
                                            if ((i.customId) == 'stop-1') {
                                                (s4dmessage.channel).send({
                                                    embeds: [new MessageEmbed()
                                                        .setTitle(String((String(s4d.database.get(String('accessdenied_emoji'))) + ' | Configuration annulée !')))
                                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                                        .setDescription(String('La configuration a bien été stoppée !'))
                                                    ]
                                                });
                                                await delay(Number(2) * 1000);
                                                (s4dmessage.channel).bulkDelete((1 | 1));
                                            }

                                        })

                                    });
                                } else {
                                    (s4dmessage.channel).send({
                                        embeds: [new MessageEmbed()
                                            .setTitle(String((String(s4d.database.get(String('error_emoji'))) + ' | Une erreur est survenue !')))
                                            .setColor(String(s4d.database.get(String('embed_color'))))
                                            .setDescription(String('Vous devez configurer tous les boutons.'))
                                        ]
                                    });
                                    await delay(Number(2) * 1000);
                                    (s4dmessage.channel).bulkDelete((1 | 1));
                                }
                            }

                        })

                    });
                }
            }
        }

    });

    // ban id system
    s4d.client.on('guildMemberAdd', async (param1) => {
        s4d.joiningMember = param1;
        if (s4d.database.get(String((s4d.joiningMember.id))) == 'banned') {
            (s4d.joiningMember).ban({
                reason: ('[Business Bot] ' + String(s4d.database.get(String((String(s4d.joiningMember.id) + '-ban_reason'))).join(' ')))
            });
        }
        s4d.joiningMember = null
    });

    // config command
    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'configuration' || (s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'config') {
            if (s4d.database.has(String((String((s4dmessage.author).id) + '-dev'))) && s4d.database.get(String((String((s4dmessage.author).id) + '-dev'))) == 'Accepted') {
                (s4dmessage.channel).send({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('settings_emoji'))) + '__** | Menu de configuration**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String((['Coucou *`chef`*, bienvenue dans le menu de configuration, à l\'aide du menu configurez les différents systèmes !', '\n', '\n', '<:bot_tools:986669486461575270> __** | Différents systèmes configurables:**__ **', '\n', '> - <:bot_welcome:986666352125309029> | Système de bienvenue;', '\n', '> - <:bot_levelup:986666356395081758> | Système de niveau;', '\n', '> - <:bot_radio:986669484695756830> | Système de musique;', '\n', '> - <:bot_partner:986666342323216424> | Système de partenariat;', '\n', '> - <:bot_businessmoney:987757921922342943> | Système d\'économie;', '\n', '> - <:bot_giveaway:986666379396653096> | Système de giveaway;', '\n', '> - <:bot_muted:986666385763627078> | Système de ghostping;', '\n', '> - <:bot_premium:986666391803428894> | Système de livre d\'or;', '\n', '> - <:bot_link:986666351139651654> | Système d\'anecdotes;', '\n', '> - <:bot_tools:986669486461575270> | Système de publicité;**', ''].join(''))))
                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                    ],
                    components: [(new MessageActionRow()
                        .addComponents(
                            new MessageSelectMenu()
                            .setCustomId('config-menu')
                            .setPlaceholder('Interagissez avec le menu pour me configurer')
                            .setMaxValues(1)
                            .setMinValues(1)
                            .setDisabled(false)


                            .addOptions({
                                value: 'welcome_config',
                                label: 'Système de Bienvenue',
                                emoji: '<:bot_welcome:986666352125309029>',
                                description: 'Activer ou Désactiver le système de bienvenue sur le serveur',
                                default: false,
                            }, {
                                value: 'level_config',
                                label: 'Système de niveaux',
                                emoji: '<:bot_levelup:986666356395081758>',
                                description: 'Activer ou Désactiver le système de niveaux sur le serveur',
                                default: false,
                            }, {
                                value: 'music_config',
                                label: 'Système de musique',
                                emoji: '<:bot_radio:986669484695756830>',
                                description: 'Activer ou Désactiver le système de musique sur le serveur',
                                default: false,
                            }, {
                                value: 'partner_config',
                                label: 'Système de partenariat',
                                emoji: '<:bot_partner:986666342323216424>',
                                description: 'Activer ou Désactiver le système de partenariat sur le serveur',
                                default: false,
                            }, {
                                value: 'money_config',
                                label: 'Système d\'économie',
                                emoji: '<:bot_businessmoney:987757921922342943>',
                                description: 'Activer ou Désactiver le système d\'économie sur le serveur',
                                default: false,
                            }, {
                                value: 'giveaway_config',
                                label: 'Système de giveaway',
                                emoji: '<:bot_giveaway:986666379396653096>',
                                description: 'Activer ou Désactiver le système de giveaway sur le serveur',
                                default: false,
                            }, {
                                value: 'ghostping_config',
                                label: 'Système de ghostping',
                                emoji: '<:bot_muted:986666385763627078>',
                                description: 'Activer ou Désactiver le système de ghostping sur le serveur',
                                default: false,
                            }, {
                                value: 'suggest_config',
                                label: 'Système de livre d\'or',
                                emoji: '<:bot_premium:986666391803428894>',
                                description: 'Activer ou Désactiver le système de livre d\'or sur le serveur',
                                default: false,
                            }, {
                                value: 'anecdote_config',
                                label: 'Système d\'anecdotes',
                                emoji: '<:bot_link:986666351139651654>',
                                description: 'Activer ou Désactiver le système d\'anecdotes sur le serveur',
                                default: false,
                            }, {
                                value: 'pub_config',
                                label: 'Système de publicité',
                                emoji: '<:bot_tools:986669486461575270>',
                                description: 'Activer ou Désactiver le système de publicité sur le serveur',
                                default: false,
                            }, ))
                    )]
                }).then(m => {
                    let collector = m.createMessageComponentCollector({
                        filter: i => i.user.id === (s4dmessage.member).id,
                        time: 60000
                    });
                    collector.on('collect', async i => {
                        if ((i.customId) == 'config-menu' && (i.values[0]) == 'pub_config') {
                            if (s4d.database.get(String('pub_config')) == 'off' || !s4d.database.has(String('pub_config'))) {
                                s4d.database.set(String('pub_config'), 'on');
                                s4dmessage.reply({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Système activé !**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String('Le système de bienvenue est maintenant `activé` !'))
                                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                    ],
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                }).then(async (s4dfrost_real_reply) => {
                                    await delay(Number(3) * 1000);
                                    s4dfrost_real_reply.delete();

                                });
                            } else if (s4d.database.get(String('pub_config')) == 'on') {
                                s4d.database.set(String('pub_config'), 'off');
                                s4dmessage.reply({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Système désactivé !**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String('Le système de bienvenue est maintenant `désactivé` !'))
                                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                    ],
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                }).then(async (s4dfrost_real_reply) => {
                                    await delay(Number(3) * 1000);
                                    s4dfrost_real_reply.delete();

                                });
                            }
                        }
                        if ((i.customId) == 'config-menu' && (i.values[0]) == 'anecdote_config') {
                            if (s4d.database.get(String('anecdote_config')) == 'off' || !s4d.database.has(String('anecdote_config'))) {
                                s4d.database.set(String('anecdote_config'), 'on');
                                s4dmessage.reply({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Système activé !**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String('Le système de bienvenue est maintenant `activé` !'))
                                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                    ],
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                }).then(async (s4dfrost_real_reply) => {
                                    await delay(Number(3) * 1000);
                                    s4dfrost_real_reply.delete();

                                });
                            } else if (s4d.database.get(String('anecdote_config')) == 'on') {
                                s4d.database.set(String('anecdote_config'), 'off');
                                s4dmessage.reply({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Système désactivé !**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String('Le système de bienvenue est maintenant `désactivé` !'))
                                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                    ],
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                }).then(async (s4dfrost_real_reply) => {
                                    await delay(Number(3) * 1000);
                                    s4dfrost_real_reply.delete();

                                });
                            }
                        }
                        if ((i.customId) == 'config-menu' && (i.values[0]) == 'suggest_config') {
                            if (s4d.database.get(String('suggest_config')) == 'off' || !s4d.database.has(String('suggest_config'))) {
                                s4d.database.set(String('suggest_config'), 'on');
                                s4dmessage.reply({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Système activé !**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String('Le système de bienvenue est maintenant `activé` !'))
                                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                    ],
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                }).then(async (s4dfrost_real_reply) => {
                                    await delay(Number(3) * 1000);
                                    s4dfrost_real_reply.delete();

                                });
                            } else if (s4d.database.get(String('suggest_config')) == 'on') {
                                s4d.database.set(String('ghostping_config'), 'off');
                                s4dmessage.reply({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Système désactivé !**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String('Le système de bienvenue est maintenant `désactivé` !'))
                                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                    ],
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                }).then(async (s4dfrost_real_reply) => {
                                    await delay(Number(3) * 1000);
                                    s4dfrost_real_reply.delete();

                                });
                            }
                        }
                        if ((i.customId) == 'config-menu' && (i.values[0]) == 'ghostping_config') {
                            if (s4d.database.get(String('ghostping_config')) == 'off' || !s4d.database.has(String('ghostping_config'))) {
                                s4d.database.set(String('ghostping_config'), 'on');
                                s4dmessage.reply({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Système activé !**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String('Le système de bienvenue est maintenant `activé` !'))
                                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                    ],
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                }).then(async (s4dfrost_real_reply) => {
                                    await delay(Number(3) * 1000);
                                    s4dfrost_real_reply.delete();

                                });
                            } else if (s4d.database.get(String('ghostping_config')) == 'on') {
                                s4d.database.set(String('ghostping_config'), 'off');
                                s4dmessage.reply({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Système désactivé !**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String('Le système de bienvenue est maintenant `désactivé` !'))
                                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                    ],
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                }).then(async (s4dfrost_real_reply) => {
                                    await delay(Number(3) * 1000);
                                    s4dfrost_real_reply.delete();

                                });
                            }
                        }
                        if ((i.customId) == 'config-menu' && (i.values[0]) == 'giveaway_config') {
                            if (s4d.database.get(String('giveaway_config')) == 'off' || !s4d.database.has(String('giveaway_config'))) {
                                s4d.database.set(String('giveaway_config'), 'on');
                                s4dmessage.reply({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Système activé !**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String('Le système de bienvenue est maintenant `activé` !'))
                                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                    ],
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                }).then(async (s4dfrost_real_reply) => {
                                    await delay(Number(3) * 1000);
                                    s4dfrost_real_reply.delete();

                                });
                            } else if (s4d.database.get(String('giveaway_config')) == 'on') {
                                s4d.database.set(String('giveaway_config'), 'off');
                                s4dmessage.reply({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Système désactivé !**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String('Le système de bienvenue est maintenant `désactivé` !'))
                                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                    ],
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                }).then(async (s4dfrost_real_reply) => {
                                    await delay(Number(3) * 1000);
                                    s4dfrost_real_reply.delete();

                                });
                            }
                        }
                        if ((i.customId) == 'config-menu' && (i.values[0]) == 'money_config') {
                            if (s4d.database.get(String('money_config')) == 'off' || !s4d.database.has(String('money_config'))) {
                                s4d.database.set(String('money_config'), 'on');
                                s4dmessage.reply({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Système activé !**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String('Le système de bienvenue est maintenant `activé` !'))
                                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                    ],
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                }).then(async (s4dfrost_real_reply) => {
                                    await delay(Number(3) * 1000);
                                    s4dfrost_real_reply.delete();

                                });
                            } else if (s4d.database.get(String('money_config')) == 'on') {
                                s4d.database.set(String('money_config'), 'off');
                                s4dmessage.reply({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Système désactivé !**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String('Le système de bienvenue est maintenant `désactivé` !'))
                                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                    ],
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                }).then(async (s4dfrost_real_reply) => {
                                    await delay(Number(3) * 1000);
                                    s4dfrost_real_reply.delete();

                                });
                            }
                        }
                        if ((i.customId) == 'config-menu' && (i.values[0]) == 'partner_config') {
                            if (s4d.database.get(String('partner_config')) == 'off' || !s4d.database.has(String('partner_config'))) {
                                s4d.database.set(String('partner_config'), 'on');
                                s4dmessage.reply({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Système activé !**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String('Le système de bienvenue est maintenant `activé` !'))
                                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                    ],
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                }).then(async (s4dfrost_real_reply) => {
                                    await delay(Number(3) * 1000);
                                    s4dfrost_real_reply.delete();

                                });
                            } else if (s4d.database.get(String('partner_config')) == 'on') {
                                s4d.database.set(String('partner_config'), 'off');
                                s4dmessage.reply({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Système désactivé !**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String('Le système de bienvenue est maintenant `désactivé` !'))
                                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                    ],
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                }).then(async (s4dfrost_real_reply) => {
                                    await delay(Number(3) * 1000);
                                    s4dfrost_real_reply.delete();

                                });
                            }
                        }
                        if ((i.customId) == 'config-menu' && (i.values[0]) == 'music_config') {
                            if (s4d.database.get(String('music_config')) == 'off' || !s4d.database.has(String('music_config'))) {
                                s4d.database.set(String('music_config'), 'on');
                                s4dmessage.reply({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Système activé !**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String('Le système de bienvenue est maintenant `activé` !'))
                                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                    ],
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                }).then(async (s4dfrost_real_reply) => {
                                    await delay(Number(3) * 1000);
                                    s4dfrost_real_reply.delete();

                                });
                            } else if (s4d.database.get(String('music_config')) == 'on') {
                                s4d.database.set(String('music_config'), 'off');
                                s4dmessage.reply({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Système désactivé !**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String('Le système de bienvenue est maintenant `désactivé` !'))
                                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                    ],
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                }).then(async (s4dfrost_real_reply) => {
                                    await delay(Number(3) * 1000);
                                    s4dfrost_real_reply.delete();

                                });
                            }
                        }
                        if ((i.customId) == 'config-menu' && (i.values[0]) == 'level_config') {
                            if (s4d.database.get(String('level_config')) == 'off' || !s4d.database.has(String('level_config'))) {
                                s4d.database.set(String('level_config'), 'on');
                                s4dmessage.reply({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Système activé !**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String('Le système de bienvenue est maintenant `activé` !'))
                                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                    ],
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                }).then(async (s4dfrost_real_reply) => {
                                    await delay(Number(3) * 1000);
                                    s4dfrost_real_reply.delete();

                                });
                            } else if (s4d.database.get(String('level_config')) == 'on') {
                                s4d.database.set(String('level_config'), 'off');
                                s4dmessage.reply({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Système désactivé !**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String('Le système de bienvenue est maintenant `désactivé` !'))
                                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                    ],
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                }).then(async (s4dfrost_real_reply) => {
                                    await delay(Number(3) * 1000);
                                    s4dfrost_real_reply.delete();

                                });
                            }
                        }
                        if ((i.customId) == 'config-menu' && (i.values[0]) == 'welcome_config') {
                            if (s4d.database.get(String('welcome_config')) == 'off' || !s4d.database.has(String('welcome_config'))) {
                                s4d.database.set(String('welcome_config'), 'on');
                                s4dmessage.reply({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Système activé !**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String('Le système de bienvenue est maintenant `activé` !'))
                                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                    ],
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                }).then(async (s4dfrost_real_reply) => {
                                    await delay(Number(3) * 1000);
                                    s4dfrost_real_reply.delete();

                                });
                            } else if (s4d.database.get(String('welcome_config')) == 'on') {
                                s4d.database.set(String('welcome_config'), 'off');
                                s4dmessage.reply({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Système désactivé !**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String('Le système de bienvenue est maintenant `désactivé` !'))
                                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                    ],
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                }).then(async (s4dfrost_real_reply) => {
                                    await delay(Number(3) * 1000);
                                    s4dfrost_real_reply.delete();

                                });
                            }
                        }

                    })

                });
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String('Seuls les développeurs du bot ont accès à cette commande !'))
                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();
                    s4dmessage.delete();

                });
            }
        }

    });

    // moderation command
    s4d.client.on('messageCreate', async (s4dmessage) => {
        if (((s4dmessage.content) || '').startsWith((String(s4d.database.get(String('prefix'))) + 'clear') || '')) {
            if (!((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'clear')) {
                if ((s4dmessage.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
                    if (s4d.database.get(String((String((s4dmessage.author).id) + '-cooldown_clear'))) <= (Math.floor(new Date().getTime() / 1000)) || !s4d.database.has(String((String((s4dmessage.author).id) + '-cooldown_clear')))) {
                        clear_number_args = (s4dmessage.content).split(' ');
                        clear_number = clear_number_args.splice(1, 1)[0];
                        if (!(clear_number == '')) {
                            s4d.database.set(String((String((s4dmessage.author).id) + '-cooldown_clear')), ((Math.floor(new Date().getTime() / 1000)) + 300));
                            s4dmessage.reply({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Messages Supprimés !**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((['Les *`', clear_number, '` message(s)* ont bien été supprimés !'].join(''))))
                                    .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                ],
                                allowedMentions: {
                                    repliedUser: true
                                }
                            });
                            s4d.client.channels.cache.get(s4d.database.get(String('logs_bot'))).send({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('delete_emoji'))) + '__** | Messages Supprimés !**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((['<:bot_captcha:986666362271322112> **| Nombre de messages:** ```', clear_number, ' message(s)```', '\n', '', '<:bot_shield:986666382735339550> **| Auteur:** ```', (s4dmessage.author).tag, '```'].join(''))))
                                ]
                            });
                            (s4dmessage.channel).bulkDelete((clear_number | 1));
                        } else {
                            s4dmessage.reply({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Un erreur s\'est produite !**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String(('Vous devez spécifier un nombre de message à supprimer !' + '')))
                                    .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                ],
                                allowedMentions: {
                                    repliedUser: true
                                }
                            }).then(async (s4dfrost_real_reply) => {
                                await delay(Number(5) * 1000);
                                s4dfrost_real_reply.delete();
                                s4dmessage.delete();

                            });
                        }
                    } else {
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Un erreur s\'est produite !**__')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String((['*Vous devez patienter `', s4d.database.get(String((String((s4dmessage.author).id) + '-cooldown_clear'))) - (Math.floor(new Date().getTime() / 1000)), ' secondes` avant de pourvoir réutiliser cette commande !*'].join(''))))
                                .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                            ],
                            allowedMentions: {
                                repliedUser: true
                            }
                        }).then(async (s4dfrost_real_reply) => {
                            await delay(Number(5) * 1000);
                            s4dmessage.delete();
                            s4dfrost_real_reply.delete();

                        });
                    }
                } else {
                    s4dmessage.reply({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Un erreur s\'est produite !**__')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String(('Vous n\'avez pas l\'autorisation d\'entrer cette commande !' + '')))
                            .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                        ],
                        allowedMentions: {
                            repliedUser: true
                        }
                    }).then(async (s4dfrost_real_reply) => {
                        await delay(Number(5) * 1000);
                        s4dfrost_real_reply.delete();
                        s4dmessage.delete();

                    });
                }
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Un erreur s\'est produite !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String(('Vous devez spécifier un nombre de message à supprimer !' + '')))
                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();
                    s4dmessage.delete();

                });
            }
        }
        if (((s4dmessage.content) || '').startsWith((String(s4d.database.get(String('prefix'))) + 'unban') || '')) {
            if (!((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'unban')) {
                if ((s4dmessage.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
                    deban_member_args = (s4dmessage.content).split(' ');
                    deban_member = deban_member_args.splice(1, 1)[0];
                    deban_reason = deban_member_args.slice(1, 1000000000);
                    if (s4d.database.has(String(deban_member)) && s4d.database.get(String(deban_member)) == 'banned') {
                        s4d.database.set(String(deban_member), 'unbanned');
                    }
                    if (!(deban_reason == '')) {
                        s4d.client.channels.cache.get(s4d.database.get(String('logs_bot'))).send({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + '__** | Nouveau Debannissement**__')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String((['<:bot_community:986667100343001109> ** | Utilisateur:** ```', deban_member, '```', '\n', '<a:bot_loupe:986674310913617920> **| Type d\'action:** ```', 'Debannissement```', '\n', '<:bot_edit:986666388494114866> **| Raison:** ```', deban_reason, '```', '\n', '<:bot_shield:986666382735339550> **| Auteur:** ```', (s4dmessage.author).tag, '```'].join(''))))
                            ]
                        });
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Utilisateur Debanni !**__')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String('L\'utilisateur a bien été débanni !'))
                                .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                            ],
                            allowedMentions: {
                                repliedUser: true
                            }
                        }).then(async (s4dfrost_real_reply) => {
                            await delay(Number(5) * 1000);
                            s4dmessage.delete();

                        });
                        (s4dmessage.guild).members.unban((deban_member.id))
                    } else {
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Un erreur s\'est produite !**__')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String('Vous devez spécifier une raison !'))
                                .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                            ],
                            allowedMentions: {
                                repliedUser: true
                            }
                        }).then(async (s4dfrost_real_reply) => {
                            await delay(Number(5) * 1000);
                            s4dfrost_real_reply.delete();
                            s4dmessage.delete();

                        });
                    }
                } else {
                    s4dmessage.reply({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Un erreur s\'est produite !**__')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String('Vous n\'avez pas l\'autorisation d\'entrer cette commande !'))
                            .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                        ],
                        allowedMentions: {
                            repliedUser: true
                        }
                    }).then(async (s4dfrost_real_reply) => {
                        await delay(Number(5) * 1000);
                        s4dfrost_real_reply.delete();
                        s4dmessage.delete();

                    });
                }
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Un erreur s\'est produite !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String('Vous devez renseigner le membre en question ainsi qu\'un raison.'))
                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();
                    s4dmessage.delete();

                });
            }
        }
        if (((s4dmessage.content) || '').startsWith((String(s4d.database.get(String('prefix'))) + 'ban') || '')) {
            if (!((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'ban')) {
                if ((s4dmessage.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR) || ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.get(s4d.database.get(String('ban_perm0')))).id)) || ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.get(s4d.database.get(String('ban_perm1')))).id)) || ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.get(s4d.database.get(String('ban_perm2')))).id)) || ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.get(s4d.database.get(String('ban_perm3')))).id)) || ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.get(s4d.database.get(String('ban_perm4')))).id)) || ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.get(s4d.database.get(String('ban_perm5')))).id)) || ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.get(s4d.database.get(String('ban_perm6')))).id))) {
                    if (s4d.database.get(String((String((s4dmessage.author).id) + '-cooldown_ban'))) <= (Math.floor(new Date().getTime() / 1000)) || !s4d.database.has(String((String((s4dmessage.author).id) + '-cooldown_ban')))) {
                        ban_member_args = (s4dmessage.content).split(' ');
                        ban_member = ban_member_args.splice(1, 1)[0];
                        ban_member_id = ban_member.slice(0, 21);
                        ban_reason = ban_member_args.slice(1, 10000000);
                        if (!(ban_reason == '')) {
                            if ((ban_member || '').startsWith('<@' || '')) {
                                s4dmessage.reply({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('banned_emoji'))) + '__** | Utilisateur sanctionné !**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String((['L\'utilisateur a bien été sanctionné !', '\n', '\n', '<a:bot_loupe:986674310913617920> **| Type de sanction:** ```', 'Bannissement ```', '\n', '', '<:bot_edit:986666388494114866> **| Raison:** ```', ban_reason.join(' '), '```', ''].join(''))))
                                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                    ],
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                });
                                s4d.database.set(String((String((s4dmessage.author).id) + '-cooldown_ban')), ((Math.floor(new Date().getTime() / 1000)) + 300));
                                s4d.database.set(String(((s4dmessage.mentions.members.first().user).id)), 'banned');
                                (s4dmessage.mentions.members.first()).send({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String(([s4d.database.get(String('banned_emoji')), '__** | Vous avez reçu une sanction**__', '', ''].join(''))))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String((['Vous avez reçu une sanction sûr `', (s4dmessage.guild).name, '` !', '\n', '\n', '<a:bot_loupe:986674310913617920> **| Type de sanction:** ```', 'Bannissement ```', '\n', '', '<:bot_edit:986666388494114866> **| Raison:** ```', ban_reason.join(' '), '```', '\n', '<:bot_shield:986666382735339550> **| Auteur:** ```', (s4dmessage.author).tag, '```'].join(''))))
                                    ]
                                });
                                s4d.client.channels.cache.get(s4d.database.get(String('logs_bot'))).send({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String(([s4d.database.get(String('banned_emoji')), '__** | Nouvelle sanction**__', '', ''].join(''))))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String((['<:bot_handcuffs:986666403144818758> **| Utilisateur:** ```', (s4dmessage.mentions.members.first().user).tag, ' / ', ban_member_id, '```', '\n', '<a:bot_loupe:986674310913617920> **| Type de sanction:** ```', 'Bannissement ```', '\n', '', '<:bot_edit:986666388494114866> **| Raison:** ```', ban_reason.join(' '), '```', '\n', '<:bot_shield:986666382735339550> **| Auteur:** ```', (s4dmessage.author).tag, '```'].join(''))))
                                    ]
                                });
                                await delay(Number(2) * 1000);
                                (s4dmessage.mentions.members.first()).ban({
                                    reason: ('[Business Bot] ' + String(ban_reason.join(' ')))
                                });
                            } else {
                                s4d.database.set(String((String((s4dmessage.author).id) + '-cooldown_ban')), ((Math.floor(new Date().getTime() / 1000)) + 300));
                                s4d.database.set(String(ban_member_id), 'banned');
                                s4d.database.set(String((String(ban_member_id) + '-ban_reason')), ban_reason);
                                s4d.database.set(String((String(ban_member_id) + '-ban_author')), ((s4dmessage.author).tag));
                                s4dmessage.reply({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('banned_emoji'))) + '__** | Utilisateur sanctionné !**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String((['L\'utilisateur a bien été sanctionné !', '\n', '\n', '<a:bot_loupe:986674310913617920> **| Type de sanction:** ```', 'Bannissement ```', '\n', '', '<:bot_edit:986666388494114866> **| Raison:** ```', ban_reason.join(' '), '```', ''].join(''))))
                                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                    ],
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                });
                                s4d.client.channels.cache.get(s4d.database.get(String('logs_bot'))).send({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String(([s4d.database.get(String('banned_emoji')), '__** | Nouvelle sanction**__', '', ''].join(''))))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String((['<:bot_handcuffs:986666403144818758> **| Utilisateur:** ```', '', ban_member_id, '', '```', '\n', '<a:bot_loupe:986674310913617920> **| Type de sanction:** ```', 'Bannissement ```', '\n', '', '<:bot_edit:986666388494114866> **| Raison:** ```', ban_reason.join(' '), '```', '\n', '<:bot_shield:986666382735339550> **| Auteur:** ```', (s4dmessage.author).tag, '```'].join(''))))
                                    ]
                                });
                                (((s4dmessage.guild).members.cache.get(ban_member_id) || await (s4dmessage.guild).members.fetch(ban_member_id))).send({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String(([s4d.database.get(String('banned_emoji')), '__** | Vous avez reçu une sanction**__', '', ''].join(''))))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String((['Vous avez reçu une sanction sûr `', (s4dmessage.guild).name, '` !', '\n', '\n', '<a:bot_loupe:986674310913617920> **| Type de sanction:** ```', 'Bannissement ```', '\n', '', '<:bot_edit:986666388494114866> **| Raison:** ```', ban_reason.join(' '), '```', '\n', '<:bot_shield:986666382735339550> **| Auteur:** ```', (s4dmessage.author).tag, '```'].join(''))))
                                    ]
                                });
                                await delay(Number(2) * 1000);
                                (((s4dmessage.guild).members.cache.get(ban_member_id) || await (s4dmessage.guild).members.fetch(ban_member_id))).ban({
                                    reason: ('[Business Bot] ' + String(ban_reason.join(' ')))
                                });
                            }
                        } else {
                            s4dmessage.reply({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Un erreur s\'est produite !**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String(('Vous devez renseigner une raison !' + '')))
                                    .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                ],
                                allowedMentions: {
                                    repliedUser: true
                                }
                            }).then(async (s4dfrost_real_reply) => {
                                await delay(Number(5) * 1000);
                                s4dfrost_real_reply.delete();
                                s4dmessage.delete();

                            });
                        }
                    } else {
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Un erreur s\'est produite !**__')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String((['*Vous devez patienter `', s4d.database.get(String((String((s4dmessage.author).id) + '-cooldown_ban'))) - (Math.floor(new Date().getTime() / 1000)), ' secondes` avant de pourvoir réutiliser cette commande !*'].join(''))))
                                .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                            ],
                            allowedMentions: {
                                repliedUser: true
                            }
                        }).then(async (s4dfrost_real_reply) => {
                            await delay(Number(5) * 1000);
                            s4dmessage.delete();
                            s4dfrost_real_reply.delete();

                        });
                    }
                } else {
                    s4dmessage.reply({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Un erreur s\'est produite !**__')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String(('Vous n\'avez pas l\'autorisation d\'entrer cette commande !' + '')))
                            .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                        ],
                        allowedMentions: {
                            repliedUser: true
                        }
                    }).then(async (s4dfrost_real_reply) => {
                        await delay(Number(5) * 1000);
                        s4dfrost_real_reply.delete();
                        s4dmessage.delete();

                    });
                }
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Un erreur s\'est produite !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String(('Vous devez renseigner le membre en question ainsi qu\'un raison.' + '')))
                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();
                    s4dmessage.delete();

                });
            }
        }
        if (((s4dmessage.content) || '').startsWith((String(s4d.database.get(String('prefix'))) + 'kick') || '')) {
            if (!((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'kick')) {
                if ((s4dmessage.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR) || ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.get(s4d.database.get(String('ban_perm0')))).id)) || ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.get(s4d.database.get(String('ban_perm1')))).id)) || ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.get(s4d.database.get(String('ban_perm2')))).id)) || ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.get(s4d.database.get(String('ban_perm3')))).id)) || ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.get(s4d.database.get(String('ban_perm4')))).id)) || ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.get(s4d.database.get(String('ban_perm5')))).id)) || ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.get(s4d.database.get(String('ban_perm6')))).id))) {
                    if (s4d.database.get(String((String((s4dmessage.author).id) + '-cooldown_kick'))) <= (Math.floor(new Date().getTime() / 1000)) || !s4d.database.has(String((String((s4dmessage.author).id) + '-cooldown_kick')))) {
                        ban_member_args = (s4dmessage.content).split(' ');
                        ban_member = ban_member_args.splice(1, 1)[0];
                        ban_member_id = ban_member.slice(0, 20);
                        ban_reason = ban_member_args.slice(1, 10000000);
                        if (!(ban_reason == '')) {
                            if ((ban_member || '').startsWith('<@' || '')) {
                                s4d.database.set(String((String((s4dmessage.author).id) + '-cooldown_kick')), ((Math.floor(new Date().getTime() / 1000)) + 300));
                                s4dmessage.reply({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('banned_emoji'))) + '__** | Utilisateur sanctionné !**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String((['L\'utilisateur a bien été sanctionné !', '\n', '\n', '<a:bot_loupe:986674310913617920> **| Type de sanction:** ```', 'Expulsion```', '\n', '', '<:bot_edit:986666388494114866> **| Raison:** ```', ban_reason.join(' '), '```', ''].join(''))))
                                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                    ],
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                });
                                s4d.client.channels.cache.get(s4d.database.get(String('logs_bot'))).send({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String(([s4d.database.get(String('banned_emoji')), '__** | Nouvelle sanction**__', '', ''].join(''))))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String((['<:bot_handcuffs:986666403144818758> **| Utilisateur:** ```', (s4dmessage.mentions.members.first().user).tag, ' / ', (s4dmessage.mentions.members.first().user).id, '```', '\n', '<a:bot_loupe:986674310913617920> **| Type de sanction:** ```', 'Expulsion```', '\n', '', '<:bot_edit:986666388494114866> **| Raison:** ```', ban_reason.join(' '), '```', '\n', '<:bot_shield:986666382735339550> **| Auteur:** ```', (s4dmessage.author).tag, '```'].join(''))))
                                    ]
                                });
                                (s4dmessage.mentions.members.first()).send({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String(([s4d.database.get(String('banned_emoji')), '__** | Vous avez reçu une sanction**__', '', ''].join(''))))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String((['Vous avez reçu une sanction sûr `', (s4dmessage.guild).name, '` !', '\n', '\n', '<a:bot_loupe:986674310913617920> **| Type de sanction:** ```', 'Expulsion ```', '\n', '', '<:bot_edit:986666388494114866> **| Raison:** ```', ban_reason.join(' '), '```', '\n', '<:bot_shield:986666382735339550> **| Auteur:** ```', (s4dmessage.author).tag, '```'].join(''))))
                                    ]
                                });
                                await delay(Number(2) * 1000);
                                (s4dmessage.mentions.members.first()).kick({
                                    reason: ('[Business Bot] ' + String(ban_reason.join(' ')))
                                });
                            } else {
                                s4d.database.set(String((String((s4dmessage.author).id) + '-cooldown_kick')), ((Math.floor(new Date().getTime() / 1000)) + 300));
                                s4d.client.channels.cache.get(s4d.database.get(String('logs_bot'))).send({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String(([s4d.database.get(String('banned_emoji')), '__** | Nouvelle sanction**__', '', ''].join(''))))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String((['<:bot_handcuffs:986666403144818758> **| Utilisateur:** ```', (((s4dmessage.guild).members.cache.get(ban_member_id) || await (s4dmessage.guild).members.fetch(ban_member_id)).user).tag, ' / ', ban_member_id, '```', '\n', '<a:bot_loupe:986674310913617920> **| Type de sanction:** ```', 'Expulsion```', '\n', '', '<:bot_edit:986666388494114866> **| Raison:** ```', ban_reason.join(' '), '```', '\n', '<:bot_shield:986666382735339550> **| Auteur:** ```', (s4dmessage.author).tag, '```'].join(''))))
                                    ]
                                });
                                s4dmessage.reply({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('banned_emoji'))) + '__** | Utilisateur sanctionné !**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String((['L\'utilisateur a bien été sanctionné !', '\n', '\n', '<a:bot_loupe:986674310913617920> **| Type de sanction:** ```', 'Bannissement ```', '\n', '', '<:bot_edit:986666388494114866> **| Raison:** ```', ban_reason.join(' '), '```', ''].join(''))))
                                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                    ],
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                });
                                (((s4dmessage.guild).members.cache.get(ban_member_id) || await (s4dmessage.guild).members.fetch(ban_member_id))).send({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String(([s4d.database.get(String('banned_emoji')), '__** | Vous avez reçu une sanction**__', '', ''].join(''))))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String((['Vous avez reçu une sanction sûr `', (s4dmessage.guild).name, '` !', '\n', '\n', '<a:bot_loupe:986674310913617920> **| Type de sanction:** ```', 'Expulsion ```', '\n', '', '<:bot_edit:986666388494114866> **| Raison:** ```', ban_reason.join(' '), '```', '\n', '<:bot_shield:986666382735339550> **| Auteur:** ```', (s4dmessage.author).tag, '```'].join(''))))
                                    ]
                                });
                                await delay(Number(2) * 1000);
                                (((s4dmessage.guild).members.cache.get(ban_member_id) || await (s4dmessage.guild).members.fetch(ban_member_id))).kick({
                                    reason: ('[Business Bot] ' + String(ban_reason.join(' ')))
                                });
                            }
                        } else {
                            s4dmessage.reply({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Un erreur s\'est produite !**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String(('Vous devez renseigner une raison !' + '')))
                                    .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                ],
                                allowedMentions: {
                                    repliedUser: true
                                }
                            }).then(async (s4dfrost_real_reply) => {
                                await delay(Number(5) * 1000);
                                s4dfrost_real_reply.delete();
                                s4dmessage.delete();

                            });
                        }
                    } else {
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Un erreur s\'est produite !**__')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String((['*Vous devez patienter `', s4d.database.get(String((String((s4dmessage.author).id) + '-cooldown_kick'))) - (Math.floor(new Date().getTime() / 1000)), ' secondes` avant de pourvoir réutiliser cette commande !*'].join(''))))
                                .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                            ],
                            allowedMentions: {
                                repliedUser: true
                            }
                        }).then(async (s4dfrost_real_reply) => {
                            await delay(Number(5) * 1000);
                            s4dmessage.delete();
                            s4dfrost_real_reply.delete();

                        });
                    }
                } else {
                    s4dmessage.reply({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Un erreur s\'est produite !**__')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String(('Vous n\'avez pas l\'autorisation d\'entrer cette commande !' + '')))
                            .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                        ],
                        allowedMentions: {
                            repliedUser: true
                        }
                    }).then(async (s4dfrost_real_reply) => {
                        await delay(Number(5) * 1000);
                        s4dfrost_real_reply.delete();
                        s4dmessage.delete();

                    });
                }
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Un erreur s\'est produite !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String(('Vous devez renseigner le membre en question ainsi qu\'un raison.' + '')))
                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();
                    s4dmessage.delete();

                });
            }
        }

    });

    // money staff
    s4d.client.on('messageCreate', async (s4dmessage) => {
        if (((s4dmessage.content) || '').startsWith((String(s4d.database.get(String('prefix'))) + 'money_remove') || '')) {
            if (!((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'money_remove')) {
                if (s4d.database.has(String((String((s4dmessage.author).id) + '-owner'))) && s4d.database.get(String((String((s4dmessage.author).id) + '-owner'))) == 'ok') {
                    money_remove_args = (s4dmessage.content).split(' ');
                    money_remove_member = money_remove_args.splice(1, 1)[0];
                    money_remove_number = money_remove_args.splice(1, 1)[0];
                    if (!(money_remove_member == '')) {
                        if (!(money_remove_number == '')) {
                            if ((money_remove_member || '').startsWith('<@' || '')) {
                                (s4dmessage.mentions.members.first()).send({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('money_emoji'))) + '__** | Argent retirée**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String((['<:bot_businessmoney:987757921922342943> **| Somme retirée:** ```', money_remove_number, ' 💰```', '\n', '<:bot_community:986667100343001109> **| Equipier:** ```', (s4dmessage.mentions.members.first().user).tag, ' / ', (s4dmessage.mentions.members.first().user).id, '```', '\n', '<:bot_shield:986666382735339550> **| Auteur:** ```', (s4dmessage.author).tag, '```'].join(''))))
                                    ]
                                });
                                (((s4dmessage.guild).members.cache.get('397406757422628869') || await (s4dmessage.guild).members.fetch('397406757422628869'))).send({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('money_emoji'))) + '__** | Argent retirée**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String((['<:bot_businessmoney:987757921922342943> **| Somme retirée:** ```', money_remove_number, ' 💰```', '\n', '<:bot_community:986667100343001109> **| Equipier:** ```', (s4dmessage.mentions.members.first().user).tag, ' / ', (s4dmessage.mentions.members.first().user).id, '```', '\n', '<:bot_shield:986666382735339550> **| Auteur:** ```', (s4dmessage.author).tag, '```'].join(''))))
                                    ]
                                });
                                s4d.client.channels.cache.get(s4d.database.get(String('logs_bot'))).send({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('money_emoji'))) + '<:bot_businessmoney:987757921922342943> **| Somme retirée:** ```')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String((['<:bot_businessmoney:987757921922342943> **| Somme retirée:** ```', money_remove_number, ' 💰```', '\n', '<:bot_community:986667100343001109> **| Equipier:** ```', (s4dmessage.mentions.members.first().user).tag, ' / ', (s4dmessage.mentions.members.first().user).id, '```', '\n', '<:bot_shield:986666382735339550> **| Auteur:** ```', (s4dmessage.author).tag, '```'].join(''))))
                                    ]
                                });
                                s4d.database.add(String((String((s4dmessage.mentions.members.first().user).id) + '-money')), parseInt(money_remove_number));
                                s4dmessage.reply({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Argent retirée !**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String((['Les *`', money_remove_number, '`* <:bot_businessmoney:987757921922342943> ont bien été retirés !'].join(''))))
                                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                    ],
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                });
                            } else {
                                (((s4dmessage.guild).members.cache.get(money_remove_member) || await (s4dmessage.guild).members.fetch(money_remove_member))).send({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('money_emoji'))) + '__** | Argent retirée**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String((['<:bot_businessmoney:987757921922342943> **| Somme retirée:** ```', money_remove_number, ' 💰```', '\n', '<:bot_community:986667100343001109> **| Equipier:** ```', (((s4dmessage.guild).members.cache.get(money_remove_member) || await (s4dmessage.guild).members.fetch(money_remove_member)).user).tag, ' / ', (((s4dmessage.guild).members.cache.get(money_remove_member) || await (s4dmessage.guild).members.fetch(money_remove_member)).user).id, '```', '\n', '<:bot_shield:986666382735339550> **| Auteur:** ```', (s4dmessage.author).tag, '```'].join(''))))
                                    ]
                                });
                                (((s4dmessage.guild).members.cache.get('397406757422628869') || await (s4dmessage.guild).members.fetch('397406757422628869'))).send({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('money_emoji'))) + '__** | Argent retirée**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String((['<:bot_businessmoney:987757921922342943> **| Somme retirée:** ```', money_remove_number, ' 💰```', '\n', '<:bot_community:986667100343001109> **| Equipier:** ```', (((s4dmessage.guild).members.cache.get(money_remove_member) || await (s4dmessage.guild).members.fetch(money_remove_member)).user).tag, ' / ', (((s4dmessage.guild).members.cache.get(money_remove_member) || await (s4dmessage.guild).members.fetch(money_remove_member)).user).id, '```', '\n', '<:bot_shield:986666382735339550> **| Auteur:** ```', (s4dmessage.author).tag, '```'].join(''))))
                                    ]
                                });
                                s4d.client.channels.cache.get(s4d.database.get(String('logs_bot'))).send({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('money_emoji'))) + '__** | Argent retirée**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String((['<:bot_businessmoney:987757921922342943> **| Somme retirée:** ```', money_remove_number, ' 💰```', '\n', '<:bot_community:986667100343001109> **| Equipier:** ```', (((s4dmessage.guild).members.cache.get(money_remove_member) || await (s4dmessage.guild).members.fetch(money_remove_member)).user).tag, ' / ', (((s4dmessage.guild).members.cache.get(money_remove_member) || await (s4dmessage.guild).members.fetch(money_remove_member)).user).id, '```', '\n', '<:bot_shield:986666382735339550> **| Auteur:** ```', (s4dmessage.author).tag, '```'].join(''))))
                                    ]
                                });
                                s4d.database.add(String((String((((s4dmessage.guild).members.cache.get(money_remove_member) || await (s4dmessage.guild).members.fetch(money_remove_member)).user).id) + '-money')), parseInt(money_remove_number));
                                s4dmessage.reply({
                                    embeds: [new MessageEmbed()
                                        .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Argent retirée**__')))
                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                        .setDescription(String((['Les *`', money_remove_number, '`* <:bot_businessmoney:987757921922342943> ont bien été ajoutés !'].join(''))))
                                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                    ],
                                    allowedMentions: {
                                        repliedUser: true
                                    }
                                });
                            }
                        } else {
                            s4dmessage.reply({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Un erreur s\'est produite !**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String('Vous devez renseigner le nombre de coins à retirer !'))
                                    .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                ],
                                allowedMentions: {
                                    repliedUser: true
                                }
                            }).then(async (s4dfrost_real_reply) => {
                                await delay(Number(5) * 1000);
                                s4dfrost_real_reply.delete();
                                s4dmessage.delete();

                            });
                        }
                    } else {
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Un erreur s\'est produite !**__')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String('Vous devez renseigner l\'équipier en question !'))
                                .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                            ],
                            allowedMentions: {
                                repliedUser: true
                            }
                        }).then(async (s4dfrost_real_reply) => {
                            await delay(Number(5) * 1000);
                            s4dfrost_real_reply.delete();
                            s4dmessage.delete();

                        });
                    }
                } else {
                    s4dmessage.reply({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Un erreur s\'est produite !**__')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String('Vous devez faire parti de l\'équipe de ce serveur pour entrer cette commande !'))
                            .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                        ],
                        allowedMentions: {
                            repliedUser: true
                        }
                    }).then(async (s4dfrost_real_reply) => {
                        await delay(Number(5) * 1000);
                        s4dfrost_real_reply.delete();
                        s4dmessage.delete();

                    });
                }
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Un erreur s\'est produite !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String((['Vous devez spécifier un équipier et un nombre d\'argent !', '\n', '\n', '`!money_remove <@user> <money number>`'].join(''))))
                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();
                    s4dmessage.delete();

                });
            }
        }
        if (((s4dmessage.content) || '').startsWith((String(s4d.database.get(String('prefix'))) + 'money_add') || '')) {
            if (!((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'money_add')) {
                if (s4d.database.has(String((String((s4dmessage.author).id) + '-owner'))) && s4d.database.get(String((String((s4dmessage.author).id) + '-owner'))) == 'ok') {
                    money_add_args = (s4dmessage.content).split(' ');
                    money_add_member = money_add_args.splice(1, 1)[0];
                    money_add_number = money_add_args.splice(1, 1)[0];
                    if (!(money_add_member == '') && !(money_add_member == '')) {
                        if ((money_add_member || '').startsWith('<@' || '')) {
                            (s4dmessage.mentions.members.first()).send({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('money_emoji'))) + '__** | Argent ajoutée**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((['<:bot_businessmoney:987757921922342943> **| Somme ajoutée:** ```', money_add_number, ' 💰```', '\n', '<:bot_community:986667100343001109> **| Equipier:** ```', (s4dmessage.mentions.members.first().user).tag, ' / ', (s4dmessage.mentions.members.first().user).id, '```', '\n', '<:bot_shield:986666382735339550> **| Auteur:** ```', (s4dmessage.author).tag, '```'].join(''))))
                                ]
                            });
                            (((s4dmessage.guild).members.cache.get('397406757422628869') || await (s4dmessage.guild).members.fetch('397406757422628869'))).send({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('money_emoji'))) + '__** | Argent ajoutée**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((['<:bot_businessmoney:987757921922342943> **| Somme ajoutée:** ```', money_add_number, ' 💰```', '\n', '<:bot_community:986667100343001109> **| Equipier:** ```', (s4dmessage.mentions.members.first().user).tag, ' / ', (s4dmessage.mentions.members.first().user).id, '```', '\n', '<:bot_shield:986666382735339550> **| Auteur:** ```', (s4dmessage.author).tag, '```'].join(''))))
                                ]
                            });
                            s4d.client.channels.cache.get(s4d.database.get(String('logs_bot'))).send({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('money_emoji'))) + '__** | Argent ajoutée**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((['<:bot_businessmoney:987757921922342943> **| Somme ajoutée:** ```', money_add_number, ' 💰```', '\n', '<:bot_community:986667100343001109> **| Equipier:** ```', (s4dmessage.mentions.members.first().user).tag, ' / ', (s4dmessage.mentions.members.first().user).id, '```', '\n', '<:bot_shield:986666382735339550> **| Auteur:** ```', (s4dmessage.author).tag, '```'].join(''))))
                                ]
                            });
                            s4d.database.add(String((String((s4dmessage.mentions.members.first().user).id) + '-money')), parseInt(money_add_number));
                            s4dmessage.reply({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Argent ajoutée !**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((['Les *`', money_add_number, '`* <:bot_businessmoney:987757921922342943> ont bien été ajoutés !'].join(''))))
                                    .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                ],
                                allowedMentions: {
                                    repliedUser: true
                                }
                            });
                        } else {
                            (((s4dmessage.guild).members.cache.get(money_add_member) || await (s4dmessage.guild).members.fetch(money_add_member))).send({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('money_emoji'))) + '__** | Argent ajoutée**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((['<:bot_businessmoney:987757921922342943> **| Somme ajoutée:** ```', money_add_number, ' 💰```', '\n', '<:bot_community:986667100343001109> **| Equipier:** ```', (((s4dmessage.guild).members.cache.get(money_add_member) || await (s4dmessage.guild).members.fetch(money_add_member)).user).tag, ' / ', (((s4dmessage.guild).members.cache.get(money_add_member) || await (s4dmessage.guild).members.fetch(money_add_member)).user).id, '```', '\n', '<:bot_shield:986666382735339550> **| Auteur:** ```', (s4dmessage.author).tag, '```'].join(''))))
                                ]
                            });
                            (((s4dmessage.guild).members.cache.get('397406757422628869') || await (s4dmessage.guild).members.fetch('397406757422628869'))).send({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('money_emoji'))) + '__** | Argent ajoutée**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((['<:bot_businessmoney:987757921922342943> **| Somme ajoutée:** ```', money_add_number, ' 💰```', '\n', '<:bot_community:986667100343001109> **| Equipier:** ```', (((s4dmessage.guild).members.cache.get(money_add_member) || await (s4dmessage.guild).members.fetch(money_add_member)).user).tag, ' / ', (((s4dmessage.guild).members.cache.get(money_add_member) || await (s4dmessage.guild).members.fetch(money_add_member)).user).id, '```', '\n', '<:bot_shield:986666382735339550> **| Auteur:** ```', (s4dmessage.author).tag, '```'].join(''))))
                                ]
                            });
                            s4d.client.channels.cache.get(s4d.database.get(String('logs_bot'))).send({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('money_emoji'))) + '__** | Argent ajoutée**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((['<:bot_businessmoney:987757921922342943> **| Somme ajoutée:** ```', money_add_number, ' 💰```', '\n', '<:bot_community:986667100343001109> **| Equipier:** ```', (((s4dmessage.guild).members.cache.get(money_add_member) || await (s4dmessage.guild).members.fetch(money_add_member)).user).tag, ' / ', (((s4dmessage.guild).members.cache.get(money_add_member) || await (s4dmessage.guild).members.fetch(money_add_member)).user).id, '```', '\n', '<:bot_shield:986666382735339550> **| Auteur:** ```', (s4dmessage.author).tag, '```'].join(''))))
                                ]
                            });
                            s4d.database.add(String((String((((s4dmessage.guild).members.cache.get(money_add_member) || await (s4dmessage.guild).members.fetch(money_add_member)).user).id) + '-money')), parseInt(money_add_number));
                            s4dmessage.reply({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Argent ajoutée !**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((['Les *`', money_add_number, '`* <:bot_businessmoney:987757921922342943> ont bien été ajoutés !'].join(''))))
                                    .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                ],
                                allowedMentions: {
                                    repliedUser: true
                                }
                            });
                        }
                    } else {
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Un erreur s\'est produite !**__')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String('Vous devez renseigner l\'équipier en question !'))
                                .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                            ],
                            allowedMentions: {
                                repliedUser: true
                            }
                        }).then(async (s4dfrost_real_reply) => {
                            await delay(Number(5) * 1000);
                            s4dfrost_real_reply.delete();
                            s4dmessage.delete();

                        });
                    }
                } else {
                    s4dmessage.reply({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Un erreur s\'est produite !**__')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String('Vous devez faire parti de l\'équipe de ce serveur pour entrer cette commande !'))
                            .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                        ],
                        allowedMentions: {
                            repliedUser: true
                        }
                    }).then(async (s4dfrost_real_reply) => {
                        await delay(Number(5) * 1000);
                        s4dfrost_real_reply.delete();
                        s4dmessage.delete();

                    });
                }
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Un erreur s\'est produite !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String((['Vous devez spécifier un équipier et un nombre d\'argent !', '\n', '\n', '`!money_add <@user> <money number>`'].join(''))))
                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();
                    s4dmessage.delete();

                });
            }
        }
        if ((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'money') {
            if ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.get(s4d.database.get(String('staff')))).id)) {
                if (!s4d.database.has(String((String((s4dmessage.author).id) + '-money')))) {
                    s4d.database.set(String((String((s4dmessage.author).id) + '-money')), 0);
                    s4dmessage.reply({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Message envoyé**__')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String((['L\'argent que contient votre compte vous a été envoyé en MP !', '', ''].join(''))))
                            .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                        ],
                        allowedMentions: {
                            repliedUser: true
                        }
                    });
                    (s4dmessage.author).send({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('money_emoji'))) + '__** | J\'possède des tunes !**__')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String((['Bonjour acolyte, tu possèdes *`', s4d.database.get(String((String((s4dmessage.author).id) + '-money'))), '`* <:bot_businessmoney:987757921922342943>, félicitations !'].join(''))))
                            .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                        ]
                    });
                } else {
                    s4dmessage.reply({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Message envoyé**__')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String((['L\'argent que contient votre compte vous a été envoyé en MP !', '', ''].join(''))))
                            .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                        ],
                        allowedMentions: {
                            repliedUser: true
                        }
                    });
                    (s4dmessage.author).send({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('money_emoji'))) + '__** | J\'possède des tunes !**__')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String((['Bonjour acolyte, tu possèdes *`', s4d.database.get(String((String((s4dmessage.author).id) + '-money'))), '`* <:bot_businessmoney:987757921922342943>, félicitations !'].join(''))))
                            .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                        ]
                    });
                }
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Un erreur s\'est produite !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String('Vous devez faire parti de l\'équipe de ce serveur pour entrer cette commande !'))
                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();
                    s4dmessage.delete();

                });
            }
        }
        if (((s4dmessage.content) || '').startsWith((String(s4d.database.get(String('prefix'))) + 'money_staff') || '')) {
            if (s4d.database.has(String((String((s4dmessage.author).id) + '-owner'))) && s4d.database.get(String((String((s4dmessage.author).id) + '-owner'))) == 'ok') {
                money_member_args = (s4dmessage.content).split(' ');
                money_member = money_member_args.splice(1, 1)[0];
                if (!(money_member == '')) {
                    if ((money_member || '').startsWith('<@' || '')) {
                        if (!s4d.database.has(String((String((s4dmessage.mentions.members.first().user).id) + '-money')))) {
                            s4d.database.set(String((String((s4dmessage.mentions.members.first().user).id) + '-money')), 0);
                            (s4dmessage.author).send({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('money_emoji'))) + '__** | J\'possède des tunes !**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((['Cet équipier possède *`', s4d.database.get(String((String((s4dmessage.mentions.members.first().user).id) + '-money'))), '`* <:bot_businessmoney:987757921922342943>, félicitations !'].join(''))))
                                    .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                ]
                            });
                            s4dmessage.reply({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Message envoyé**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((['La somme d\'argent possédée par cet équipier vous a été envoyé en MP !', '', ''].join(''))))
                                    .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                ],
                                allowedMentions: {
                                    repliedUser: true
                                }
                            });
                        } else {
                            (s4dmessage.author).send({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('money_emoji'))) + '__** | J\'possède des tunes !**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((['Cet équipier possède *`', s4d.database.get(String((String((s4dmessage.mentions.members.first().user).id) + '-money'))), '`* <:bot_businessmoney:987757921922342943>, félicitations !'].join(''))))
                                    .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                ]
                            });
                            s4dmessage.reply({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Message envoyé**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((['La somme d\'argent possédée par cet équipier vous a été envoyé en MP !', '', ''].join(''))))
                                    .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                ],
                                allowedMentions: {
                                    repliedUser: true
                                }
                            });
                        }
                    } else {
                        if (!s4d.database.has(String((String((((s4dmessage.guild).members.cache.get(money_member) || await (s4dmessage.guild).members.fetch(money_member)).user).id) + '-money')))) {
                            s4d.database.set(String((String((((s4dmessage.guild).members.cache.get(money_member) || await (s4dmessage.guild).members.fetch(money_member)).user).id) + '-money')), 0);
                            (s4dmessage.author).send({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('money_emoji'))) + '__** | J\'possède des tunes !**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((['Cet équipier possède *`', s4d.database.get(String((String((((s4dmessage.guild).members.cache.get(money_member) || await (s4dmessage.guild).members.fetch(money_member)).user).id) + '-money'))), '`* <:bot_businessmoney:987757921922342943> !'].join(''))))
                                    .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                ]
                            });
                            s4dmessage.reply({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Message envoyé**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((['La somme d\'argent possédée par cet équipier vous a été envoyé en MP !', '', ''].join(''))))
                                    .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                ],
                                allowedMentions: {
                                    repliedUser: true
                                }
                            });
                        } else {
                            (s4dmessage.author).send({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('money_emoji'))) + '__** | J\'possède des tunes !**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((['Cet équipier possède *`', s4d.database.get(String((String((((s4dmessage.guild).members.cache.get(money_member) || await (s4dmessage.guild).members.fetch(money_member)).user).id) + '-money'))), '`* <:bot_businessmoney:987757921922342943> !'].join(''))))
                                    .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                ]
                            });
                            s4dmessage.reply({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Message envoyé**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((['La somme d\'argent possédée par cet équipier vous a été envoyé en MP !', '', ''].join(''))))
                                    .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                ],
                                allowedMentions: {
                                    repliedUser: true
                                }
                            });
                        }
                    }
                } else {
                    s4dmessage.reply({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Un erreur s\'est produite !**__')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String('Veuillez renseigner l\'équipier en question !'))
                            .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                        ],
                        allowedMentions: {
                            repliedUser: true
                        }
                    }).then(async (s4dfrost_real_reply) => {
                        await delay(Number(5) * 1000);
                        s4dfrost_real_reply.delete();
                        s4dmessage.delete();

                    });
                }
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Un erreur s\'est produite !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String('Vous devez faire parti de l\'équipe des propriétaires pour poursuivre !'))
                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();
                    s4dmessage.delete();

                });
            }
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if (((s4dmessage.content) || '').startsWith((String(s4d.database.get(String('prefix'))) + 'mute') || '')) {
            if (!((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'mute')) {
                if ((s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
                    mute_args = (s4dmessage.content).split(' ');
                    mute_member = mute_args.splice(1, 1)[0];
                    mute_time = mute_args.splice(1, 1)[0];
                    mute_reason = mute_args.splice(1, 1)[0];
                    if (!(mute_member == '') && !(mute_time == '') && !(mute_reason == '')) {
                        if ((mute_member || '').startsWith('<@' || '')) {
                            s4d.client.channels.cache.get(s4d.database.get(String('logs_bot'))).send({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('ping_emoji'))) + '__** | Utilisateur rendu muet !**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((['Un utilisateur a été rendu muet par un modérateur !', '\n', '\n', '<:bot_community:986667100343001109> **| Utilisateur:** ```', (s4dmessage.mentions.members.first().user).tag, ' / ', (s4dmessage.mentions.members.first().user).id, '```', '\n', '<a:bot_loupe:986674310913617920> **| Type de sanction:** ``` Time Out ```', '\n', '<:bot_edit:986666388494114866> **| Raison:** ```', mute_reason, '```', '\n', '<:bot_timedout:986666367656788038> **| Temps:** ```', mute_time, ' secondes ```', '\n', '<:bot_shield:986666382735339550> **| Auteur:** ```', (s4dmessage.author).tag, '```', '', '', ''].join(''))))
                                    .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                ]
                            });
                            s4dmessage.reply({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('ping_emoji'))) + '__** | Utilisateur rendu muet !**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String('L\'utilisateur a bien été rendu muet !'))
                                    .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                ],
                                allowedMentions: {
                                    repliedUser: true
                                }
                            });
                            (s4dmessage.mentions.members.first()).send({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('banned_emoji'))) + '__** | Vous avez reçu une sanction**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((['Vous avez reçu une sanction sur `', (s4dmessage.guild).name, '` !', '\n', '\n', '', '', '', '', '', '', '<a:bot_loupe:986674310913617920> **| Type de sanction:** ``` Time Out ```', '\n', '<:bot_edit:986666388494114866> **| Raison:** ```', mute_reason, '```', '\n', '<:bot_timedout:986666367656788038> **| Temps:** ```', mute_time, ' secondes ```', '\n', '<:bot_shield:986666382735339550> **| Auteur:** ```', (s4dmessage.author).tag, '```', '', '', ''].join(''))))
                                    .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                ]
                            });
                            s4dmessage.mentions.members.first().timeout((mute_time * 1000), mute_reason)
                        } else {
                            s4d.client.channels.cache.get(s4d.database.get(String('logs_bot'))).send({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('ping_emoji'))) + '__** | Utilisateur rendu muet !**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((['Un utilisateur a été rendu muet par un modérateur !', '\n', '\n', '<:bot_community:986667100343001109> **| Utilisateur:** ```', (((s4dmessage.guild).members.cache.get(mute_member) || await (s4dmessage.guild).members.fetch(mute_member)).user).tag, ' / ', (((s4dmessage.guild).members.cache.get(mute_member) || await (s4dmessage.guild).members.fetch(mute_member)).user).id, '```', '\n', '<a:bot_loupe:986674310913617920> **| Type de sanction:** ``` Time Out ```', '\n', '<:bot_edit:986666388494114866> **| Raison:** ```', mute_reason, '```', '\n', '<:bot_timedout:986666367656788038> **| Temps:** ```', mute_time, ' secondes ```', '\n', '<:bot_shield:986666382735339550> **| Auteur:** ```', (s4dmessage.author).tag, '```', '', '', ''].join(''))))
                                    .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                ]
                            });
                            s4dmessage.reply({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('ping_emoji'))) + '__** | Utilisateur rendu muet !**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String('L\'utilisateur a bien été rendu muet !'))
                                    .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                ],
                                allowedMentions: {
                                    repliedUser: true
                                }
                            });
                            (((s4dmessage.guild).members.cache.get(mute_member) || await (s4dmessage.guild).members.fetch(mute_member))).send({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('banned_emoji'))) + '__** | Vous avez reçu une sanction**__')))
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((['Vous avez reçu une sanction sur `', (s4dmessage.guild).name, '` !', '\n', '\n', '', '', '', '', '', '', '<a:bot_loupe:986674310913617920> **| Type de sanction:** ``` Time Out ```', '\n', '<:bot_edit:986666388494114866> **| Raison:** ```', mute_reason, '```', '\n', '<:bot_timedout:986666367656788038> **| Temps:** ```', mute_time, ' secondes ```', '\n', '<:bot_shield:986666382735339550> **| Auteur:** ```', (s4dmessage.author).tag, '```', '', '', ''].join(''))))
                                    .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                                ]
                            });
                            await delay(Number(2) * 1000);
                            ((s4dmessage.guild).members.cache.get(mute_member) || await (s4dmessage.guild).members.fetch(mute_member)).timeout((mute_time * 1000), mute_reason)
                        }
                    } else {
                        s4dmessage.reply({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String((['Mauvaise syntaxe !', '\n', '\n', 'Exemple: *`!mute <@user> <temps en secondes> <raison>`*', ''].join(''))))
                                .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                            ],
                            allowedMentions: {
                                repliedUser: true
                            }
                        }).then(async (s4dfrost_real_reply) => {
                            await delay(Number(5) * 1000);
                            s4dfrost_real_reply.delete();
                            s4dmessage.delete();

                        });
                    }
                } else {
                    s4dmessage.reply({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String('Vous devez avoir la permission *`MANAGE_MESSAGES`* pour poursuivre !'))
                            .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                        ],
                        allowedMentions: {
                            repliedUser: true
                        }
                    }).then(async (s4dfrost_real_reply) => {
                        await delay(Number(5) * 1000);
                        s4dfrost_real_reply.delete();
                        s4dmessage.delete();

                    });
                }
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String((['Vous devez renseigner l\'utilisateur en question ainsi que le temps de mute !', '\n', '\n', 'Exemple: *`!mute <@user> <temps en secondes> <raison>`*', ''].join(''))))
                        .setFooter(String(('Demandé par ' + String((s4dmessage.author).tag))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();
                    s4dmessage.delete();

                });
            }
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'debloquer') {
            if ((s4dmessage.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Salon débloqué !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String('Le `salon/ticket` a été débloqué'))
                        .setFooter(String(('Salon débloqué par ' + String((s4dmessage.author).tag))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                });
                s4d.client.channels.cache.get(s4d.database.get(String('logs_bot'))).send({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Salon/Ticket débloqué**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String((['<:bot_tools:986669486461575270> **| Salon:** ```', (s4dmessage.channel).name, ' / ', (s4dmessage.channel).id, '```', '\n', '<:bot_shield:986666382735339550> **| Auteur:** ```', (s4dmessage.author).tag, ' / ', (s4dmessage.author).id, '```', '', '', '', '', '', '', '', '', ''].join(''))))
                    ]
                });
                (s4dmessage.channel).permissionOverwrites.edit(((s4dmessage.guild).roles.cache.find((role) => role.name === '🛎️┊Staff')), {
                    SEND_MESSAGES: true
                });
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String('Vous devez posséder la permission *`ADMINISTRATOR`* pour poursuivre !'))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(5) * 1000);
                    s4dmessage.delete();
                    s4dfrost_real_reply.delete();

                });
            }
        }
        if ((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'bloquer') {
            if ((s4dmessage.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Salon bloqué !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String('Le `salon/ticket` a été restreint aux modérateurs pour une raison inconnue, veuillez patienter, un haut gradé va arrive d\'ici peu ! '))
                        .setFooter(String(('Salon restreint par ' + String((s4dmessage.author).tag))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                });
                s4d.client.channels.cache.get(s4d.database.get(String('logs_bot'))).send({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Salon/Ticket restreint**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String((['<:bot_tools:986669486461575270> **| Salon:** ```', (s4dmessage.channel).name, ' / ', (s4dmessage.channel).id, '```', '\n', '<:bot_shield:986666382735339550> **| Auteur:** ```', (s4dmessage.author).tag, ' / ', (s4dmessage.author).id, '```', '', '', '', '', '', '', '', '', ''].join(''))))
                    ]
                });
                (s4dmessage.channel).permissionOverwrites.edit(((s4dmessage.guild).roles.cache.find((role) => role.name === '🛎️┊Staff')), {
                    SEND_MESSAGES: false
                });
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String('Vous devez posséder la permission *`ADMINISTRATOR`* pour poursuivre !'))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(5) * 1000);
                    s4dmessage.delete();
                    s4dfrost_real_reply.delete();

                });
            }
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if (s4dmessage.author.bot) {
            return;
        }
        if ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.find((role) => role.name === s4d.database.get(String('owner_id')))).id)) {
            s4dmessage.react(s4d.database.get(String('owner_emoji')));
        } else if ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.find((role) => role.name === s4d.database.get(String('co-owner_id')))).id)) {
            s4dmessage.react(s4d.database.get(String('co-owner_emoji')));
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if (s4dmessage.author.bot) {
            return;
        }
        if (((s4dmessage.channel).id) == s4d.database.get(String('pub_chanel1')) || ((s4dmessage.channel).id) == s4d.database.get(String('pub_chanel2')) || ((s4dmessage.channel).id) == s4d.database.get(String('pub_chanel3')) || ((s4dmessage.channel).id) == s4d.database.get(String('pub_chanel4')) || ((s4dmessage.channel).id) == s4d.database.get(String('pub_chanel5')) || ((s4dmessage.channel).id) == s4d.database.get(String('pub_chanel6')) || ((s4dmessage.channel).id) == s4d.database.get(String('pub_chanel7')) || ((s4dmessage.channel).id) == s4d.database.get(String('pub_chanel8')) || ((s4dmessage.channel).id) == s4d.database.get(String('pub_chanel9')) || ((s4dmessage.channel).id) == s4d.database.get(String('pub_chanel10')) || ((s4dmessage.channel).id) == s4d.database.get(String('pub_chanel11')) || ((s4dmessage.channel).id) == s4d.database.get(String('pub_chanel12'))) {
            if (s4d.database.get(String('pub_config')) == 'on') {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(String(((s4dmessage.guild).name)))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String((['<:1_perso_emoji_rules:925400325416947753> **»** Votre publicité doit **respecter le règlement ** <#790517383307067432> ainsi que les ** ["Therms Of Discord"](https://discord.com/terms) !', '\n', '\n', '<:1_perso_emoji_moderator:925421011330027530> **»** **Slowmode** de **1** heure **maximum**', '\n', '\n', '<:business_perso_emoji_ping:925431173247807528> **»** Si vous **quittez le serveur** vos **publicités** seront **supprimées automatiquement** !'].join(''))))
                    ],
                    allowedMentions: {
                        repliedUser: false
                    }
                });
                s4d.client.channels.cache.get(s4d.database.get(String('logs_bot'))).send({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('save_emoji'))) + '__** | Nouvelle Publicité !**__')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String((['<:bot_link:986666351139651654> **| Identifiant du message:** ```', s4dmessage.id, '```', '\n', '<:bot_community:986667100343001109> **| Utilisateur:** ```', (s4dmessage.author).tag, ' / ', (s4dmessage.author).id, '```', '\n', '<:bot_tools:986669486461575270> **| Salon:** ```', (s4dmessage.channel).name, ' / ', (s4dmessage.channel).id, '```', '\n', '<a:bot_loupe:986674310913617920> __**| Contenu de la publicité:**__', '\n', '\n', s4dmessage.content].join(''))))
                    ]
                });
            }
        }

    });

    // Embed système (messages)
    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'pub') {
            s4dmessage.delete();
            s4dmessage.channel.send({
                embeds: [new MessageEmbed()
                    .setTitle(String((String(s4d.database.get(String('infos_emoji'))) + '__** | Notre Publicité**__')))
                    .setColor(String(s4d.database.get(String('embed_color'))))
                    .setDescription(String(`📬** » Tu souhaites faire ta pub & faire monter ton projet en visibilité facilement ?

    👉 » __Alors rejoins Business Pub !__

    📚 » Un serveur propre & organisé !
    🛡️ » Un serveur sécurisé !
    ⏱️ » Slowmode de 1h maximum !
    👮‍♂️ » Nous recrutons du staff (\`marketings\` , \`modérateurs\`, \`Responsables\`...)!

     __Alors n'attends pas et rejoins nous !__
    🎫 » Lien d'invitation :** https://discord.gg/vcgR9g6CYa
     🏙️ **»** **Bannière :** https://imgur.com/a/hYwFzp3 `))
                ]
            });
        }
        if ((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'rc') {
            s4dmessage.delete();
            s4dmessage.channel.send({
                embeds: [new MessageEmbed()
                    .setTitle(String((String(s4d.database.get(String('staff_emoji'))) + '__** | Recrutements Staff**__')))
                    .setColor(String(s4d.database.get(String('embed_color'))))
                    .setDescription(String(`Pour postuler dans le **Staff** de **Business Pub** il vous suffit de **respecter les conditions** ci-dessous !
    > Avoir __au minimum__ **13 ans**
    > Etre **actif** sur Discord
    > Etre **mature**
    > Etre **motivé**

    <:warnings:925359475001536574> **»** __**Pour postuler suivez le lien ci-dessous:**__

    ***Lien:*** [***Cliquez***](https://forms.gle/HwZsAqNWPm44xXd27)`))
                ]
            });
        }
        if ((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'part_infos') {
            s4dmessage.delete();
            s4dmessage.channel.send({
                embeds: [new MessageEmbed()
                    .setTitle(String((String(s4d.database.get(String('partner_emoji'))) + '__** | Conditions Partenariats**__')))
                    .setColor(String(s4d.database.get(String('embed_color'))))
                    .setDescription(String(`Un **partenariat** est une **opération** qui a pour but de **publier la publicité** du serveur **opposé** sur le sien dans un **salon dédié aux partenariats** et **inversement**.

    Les **conditions** et les **avantages** d'un partenariat **varient en fonction du nombre de membre** du serveur opposé.

    De plus les **bots** ne **comptes pas** dans le **total de membre**.


    <:perso_emoji_news:925359761300533258> **»** __**Conditions:**__

    > Serveurs Discord entre 40 et 200 membres *(hors bots)*:
    > \`De votre côté = @everyone\`
    > \`De notre côté = Aucune mention\`

    > Serveurs Discord entre 201 et 600 membres *(hors bots)*:
    > \`De votre côté = @ everyone\`
    > \`De notre côté = @ \`:briefcase:\`┊Notifications Partenariats\`

    > Serveurs Discord entre 601 et 1700 membres *(hors bots)*:
    > \`De votre côté = @ here\`
    > \`De notre côté = @ \`:briefcase:\`┊Notifications Partenariats\`

    > Serveurs Discord entre 1701 et 2200 membres *(hors bots)*:
    > \`De votre côté = Mention égale\`
    > \`De notre côté = Mention égale\`

    > Serveurs Discord entre 2201 et plus membres *(hors bots)*:
    > \`De votre côté = Négociations demandées\`
    > \`De notre côté = Négociations demandées\`

    Les **demandes de partenariats** se font par **ticket**, pour cela **rendez-vous** dans le salon <#876239260888465408>`))
                ]
            });
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'join_copy') {
            if (s4d.database.get(String('welcome_config')) == 'on') {
                if (s4d.database.has(String((String((s4dmessage.author).id) + '-owner'))) && s4d.database.get(String((String((s4dmessage.author).id) + '-owner'))) == 'ok') {
                    (s4dmessage.author).send({
                        content: String((['`', s4d.database.get(String('message_mp')), '`'].join('')))
                    });
                } else {
                    s4dmessage.reply({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String('Vous devez faire partie de la liste des propriétaires du serveur pour poursuivre !'))
                            .setFooter(String(('Demandé par ' + String((s4dmessage.author).id))))
                        ],
                        allowedMentions: {
                            repliedUser: true
                        }
                    }).then(async (s4dfrost_real_reply) => {
                        await delay(Number(5) * 1000);
                        s4dmessage.delete();
                        s4dfrost_real_reply.delete();

                    });
                }
            }
        }
        if ((s4dmessage.content) == String(s4d.database.get(String('prefix'))) + 'join') {
            if (s4d.database.get(String('welcome_config')) == 'on') {
                (s4dmessage.author).send({
                    content: String((String(s4d.database.get(String('message_mp'))) + ''))
                });
            }
        }
        if (((s4dmessage.content) || '').startsWith((String(s4d.database.get(String('prefix'))) + 'message_mp') || '')) {
            if (s4d.database.get(String('welcome_config')) == 'on') {
                if (s4d.database.has(String((String((s4dmessage.author).id) + '-owner'))) && s4d.database.get(String((String((s4dmessage.author).id) + '-owner'))) == 'ok') {
                    message_mp_args = (s4dmessage.content).split(' ');
                    message_mp_space = message_mp_args.slice(1, 100000000000);
                    s4d.database.set(String('message_mp'), (message_mp_space.join(' ')));
                    s4dmessage.reply({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('verify_emoji'))) + '__** | Modifications sauvegardées !**__')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String(('Toutes les modifications ont été sauvegardées, pour voir le message envoyé aux nouveaux arrivants, entrez la commande `!join` !' + '')))
                            .setFooter(String(('Demandé par ' + String((s4dmessage.author).id))))
                        ],
                        allowedMentions: {
                            repliedUser: true
                        }
                    });
                } else {
                    s4dmessage.reply({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('noaccess_emoji'))) + '__** | Une erreur est survenue !**__')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String('Vous devez faire partie de la liste des propriétaires du serveur pour poursuivre !'))
                            .setFooter(String(('Demandé par ' + String((s4dmessage.author).id))))
                        ],
                        allowedMentions: {
                            repliedUser: true
                        }
                    }).then(async (s4dfrost_real_reply) => {
                        await delay(Number(5) * 1000);
                        s4dmessage.delete();
                        s4dfrost_real_reply.delete();

                    });
                }
            }
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if (((new Date().getHours())) == 7) {
            if (s4d.database.get(String('time_vote')) == '0') {
                s4d.client.channels.cache.get(s4d.database.get(String('cmd_chanel'))).send({
                    content: String('@everyone C\'est l\'heure de voter !')
                });
                s4d.database.set(String('time_vote'), '1');
            }
        }
        if (((new Date().getMinutes())) == 8) {
            if (s4d.database.get(String('time_vote')) == '1') {
                s4d.database.set(String('time_vote'), '0');
            }
        }

    });

    // welcome système
    s4d.client.on('guildMemberAdd', async (param1) => {
        s4d.joiningMember = param1;
        if (s4d.database.get(String('welcome_config')) == 'on') {
            var embed = new Discord.MessageEmbed()
            embed.setColor(s4d.database.get(String('embed_color')));
            embed.setTitle((String(s4d.database.get(String('welcome_emoji'))) + '__** | Nouveau membre !**__'));
            embed.setDescription((['*Bienvenue à <@', s4d.joiningMember.id, '> sur `', s4d.joiningMember.guild.name, '`, l\'équipe de Business Pub vous souhaite une bonne continuation sur le serveur !* (N\'oubliez pas de faire un tour dans <#790517383307067432>)', ''].join('')));
            s4d.client.channels.cache.get(s4d.database.get(String('welcome_chanel'))).send({
                embeds: [embed]
            });

            s4d.client.channels.cache.get(s4d.database.get(String('welcome_chanel'))).send({
                content: String((['<@', s4d.joiningMember.id, '>'].join('')))
            });
            await delay(Number(1) * 1000);
            s4d.client.channels.cache.get(s4d.database.get(String('welcome_chanel'))).bulkDelete((1 | 1));
        }
        s4d.joiningMember = null
    });

    // coiffeur
    s4d.client.on('messageCreate', async (s4dmessage) => {
        if (s4dmessage.author.bot) {
            return;
        }
        if (((s4dmessage.channel).id) == s4d.database.get(String('anecdotes_chanel'))) {
            if (s4d.database.get(String('anecdote_config')) == 'on') {
                s4dmessage.delete();
                s4d.database.add(String('anecdotes-number'), parseInt(1));
                s4dmessage.channel.send({
                    embeds: [new MessageEmbed()
                        .setTitle(String(([s4d.database.get(String('premium_emoji')), '__** | Anecdote numéro `', s4d.database.get(String('anecdotes-number')), '` !**__'].join(''))))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String((['```', s4dmessage.content, '```'].join(''))))
                        .setFooter(String(('Anecdote racontée par ' + String((s4dmessage.author).tag))))
                    ]
                });
            }
        }

    });

    return s4d
})();